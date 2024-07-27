import { Canvas, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { motion } from 'framer-motion-3d';
import { TextureLoader } from 'three';

export default function earth() {
  //Deklarasi scene menggunakan useRef
  const scene = useRef(null);
  //Mengambil nilai scrollYProgress menggunakan hook useScroll
  //useScroll adalah hook dari framer-motion yang digunakan untuk melacak kemajuan scroll
  const { scrollYProgress } = useScroll({
    //kita ingin melacak elemen yang direferensikan oleh scene
    target: scene,
    //pengaturan yang menentukan kapan pelacakan dimulai dan berakhir.
    offset: ['start end', 'end start'],
  });

  const [color, normal, aoMap] = useLoader(TextureLoader, ['/color.jpg', '/normal.png', '/occlusion.jpg']);
  // const [color, normal, aoMap] = useLoader(TextureLoader, ['../../../public/color.jpg', '../../../public/normal.png', '../../../public/occlusion.jpg']);
  return (
    <>
      {/* kita akan melacak posisi scroll pada elemen canvas */}
      <Canvas ref={scene}>
        <ambientLight intensity={0.1} />
        <directionalLight intensity={3.5} position={[1, 0, -0.25]} />
        <motion.mesh scale={2.5} rotation-y={scrollYProgress}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
        </motion.mesh>
      </Canvas>
    </>
  );
}
