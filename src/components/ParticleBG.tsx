import React from 'react'
import Particles from 'react-tsparticles'

export const ParticleBG = () => {
  return (
    <Particles
      height={'100vh'}
      width={'100vw'}
      options={{
        detectRetina: true,
        interactivity: {
          detectsOn: "canvas",
          events: {
            resize: true
          }
        },
        background: {
          color: {
            value: "#f8f8f8",
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: "#f15167",
          },
          number: {
            value: 100,
          },
          size: {
            random: true,
            value: 5,
          },
          move: {
            enable: true,
            random: true,
            speed: 1,
            outMode: 'bounce'
          }
        },
        opacity: {
          value: 1,
          random: false,
          animation: {
            enable: true,
            speed: 0.5,
            minimumValue: 0,
            sync: false
          }
        },
      }}
    />
  )
}
