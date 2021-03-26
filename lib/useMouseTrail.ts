/**
 * The shader of this hook is derived from this one:
 * https://github.com/oframe/ogl/blob/eab9e72931cab5b53badf6c872216f6424fbbd25/examples/polylines.html
 */

import { useEffect, useRef } from 'react'
// @ts-ignore
import { Renderer, Transform, Vec3, Color, Polyline } from 'ogl/src/index.mjs'
import { theme as defaultTheme } from '@chakra-ui/react'

const vertex = `
   precision highp float;
 
   attribute vec3 position;
   attribute vec3 next;
   attribute vec3 prev;
   attribute vec2 uv;
   attribute float side;
 
   uniform vec2 uResolution;
   uniform float uDPR;
   uniform float uThickness;
 
   vec4 getPosition() {
       vec4 current = vec4(position, 1);
       vec2 aspect = vec2(uResolution.x / uResolution.y, 1);
       vec2 nextScreen = next.xy * aspect;
       vec2 prevScreen = prev.xy * aspect;
   
       // Calculate the tangent direction
       vec2 tangent = normalize(nextScreen - prevScreen);
   
       // Rotate 90 degrees to get the normal
       vec2 normal = vec2(-tangent.y, tangent.x);
       normal /= aspect;
       // Taper the line to be fatter in the middle, and skinny at the ends using the uv.y
       normal *= mix(1.0, 0.1, pow(abs(uv.y - 0.5) * 2.0, 2.0) );
       // When the points are on top of each other, shrink the line to avoid artifacts.
       float dist = length(nextScreen - prevScreen);
       normal *= smoothstep(0.0, 0.02, dist);
       float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
       float pixelWidth = current.w * pixelWidthRatio;
       normal *= pixelWidth * uThickness;
       current.xy -= normal * side;
   
       return current;
   }
   void main() {
       gl_Position = getPosition();
   }
 `

const parseColor = (color: string) => {
  color = color.trim()

  // rgb(redValue, greenValue, blueValue)
  if (color[0] == 'r') {
    color = color.substring(color.indexOf('(') + 1, color.indexOf(')'))
    const values = color.split(',', 3)

    return {
      r: parseInt(values[0] ?? '0'),
      g: parseInt(values[1] ?? '0'),
      b: parseInt(values[2] ?? '0'),
    }
  }

  // #rrggbb
  if (color.substring(0, 1) == '#') {
    return {
      r: parseInt(color.substring(1, 3), 16),
      g: parseInt(color.substring(3, 5), 16),
      b: parseInt(color.substring(5, 7), 16),
    }
  }

  return { r: 0, g: 0, b: 0 }
}

const colorToRgbArray = (color: string) => {
  const rgb = parseColor(color)
  return [rgb.r / 255, rgb.g / 255, rgb.b / 255, 1]
}

const random = (a: number, b: number) => {
  const alpha = Math.random()
  return a * (1.0 - alpha) + b * alpha
}

const useMouseTrail = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) {
      return
    }

    // renderer & scene
    const renderer = new Renderer({ dpr: 2 })
    const scene = new Transform()

    // gl
    const gl = renderer.gl
    gl.clearColor(
      ...colorToRgbArray(getComputedStyle(ref.current).backgroundColor)
    )
    gl.canvas.style.flex = '1'
    gl.canvas.style.width = '100%'
    gl.canvas.style.height = '100%'
    gl.canvas.style.position = 'absolute'
    gl.canvas.style.top = '0'
    gl.canvas.style.left = '0'
    ref.current.appendChild(gl.canvas)

    // lines & scene
    const lines: any[] = []
    const colors = [
      defaultTheme.colors.orange['300'],
      defaultTheme.colors.red['400'],
      defaultTheme.colors.red['500'],
      defaultTheme.colors.pink['600'],
      defaultTheme.colors.purple['900'],
    ]
    for (const color of colors) {
      const line = {
        spring: random(0.02, 0.1),
        friction: random(0.7, 0.95),
        mouseVelocity: new Vec3(),
        mouseOffset: new Vec3(random(-1, 1) * 0.02),
        points: [],
        polyline: undefined,
      }

      const count = 20
      const points = line.points
      for (let i = 0; i < count; i++) {
        // @ts-ignore
        points.push(new Vec3())
      }

      const polyline = new Polyline(gl, {
        points,
        vertex,
        uniforms: {
          uColor: { value: new Color(color) },
          uThickness: { value: random(20, 50) },
        },
      })
      polyline.mesh.setParent(scene)

      line.polyline = polyline
      lines.push(line)
    }

    // resize
    const resize = () => {
      renderer.setSize(ref.current?.clientWidth, ref.current?.clientHeight)
      lines.forEach((line) => line.polyline.resize())
    }
    window.addEventListener('resize', resize, false)
    ref.current.addEventListener('transitionend', resize)
    resize()

    // mouse
    const mouse = new Vec3()
    const updateMouse = (e: MouseEvent) => {
      if (!ref.current) {
        return
      }

      const elRect = ref.current.getBoundingClientRect()
      const bodyRect = document.body.getBoundingClientRect()

      const elLeft = elRect.left - bodyRect.left
      const elTop = elRect.top - bodyRect.top

      const x = e.pageX - elLeft
      const y = e.pageY - elTop

      mouse.set(
        (x / gl.renderer.width) * 2 - 1, // [-1, 1] range
        (y / gl.renderer.height) * -2 + 1, // [-1, 1] range
        0
      )
    }
    window.addEventListener('mousemove', updateMouse, false)

    // update
    const update = () => {
      requestAnimationFrame(update)

      for (const line of lines) {
        for (let i = line.points.length - 1; i >= 0; i--) {
          if (!i) {
            const tmp = new Vec3()
            tmp
              .copy(mouse)
              .add(line.mouseOffset)
              .sub(line.points[i])
              .multiply(line.spring)
            line.mouseVelocity.add(tmp).multiply(line.friction)
            line.points[i].add(line.mouseVelocity)
          } else {
            line.points[i].lerp(line.points[i - 1], 0.9)
          }
        }
        line.polyline.updateGeometry()
      }

      renderer.render({ scene })
    }
    requestAnimationFrame(update)

    return () => {
      window.removeEventListener('resize', resize, false)
      ref.current?.removeEventListener('transitionend', resize)
      window.removeEventListener('mousemove', updateMouse, false)
      gl.canvas.parentElement?.removeChild(gl.canvas)
    }
  }, [ref])

  return ref
}

export default useMouseTrail
