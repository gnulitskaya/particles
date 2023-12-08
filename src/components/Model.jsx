
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { easing } from 'maath'

function Model({ children, color = 'white', roughness = 0, ...props }) {
    const ref = useRef()
    const { nodes, materials } = useGLTF('/donut.glb')
    useFrame((state, delta) => {
        easing.dampC(ref.current.material.color, color, 0.2, delta)
    })
    console.log(nodes, materials);
    return (
        <mesh ref={ref} castShadow receiveShadow scale={2} geometry={nodes.Torus.geometry}>
            <meshStandardMaterial metalness={0.2} roughness={roughness} map={materials.map} />
            {children}
        </mesh>
    )
}

export default Model;