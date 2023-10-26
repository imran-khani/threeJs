import "./style.css";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

document.body.appendChild(renderer.domElement);
const orbit = new OrbitControls(camera, renderer.domElement);

camera.position.set(-10, 30, 30);
orbit.update();

const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

const planeGeometry = new THREE.PlaneGeometry(30, 30);
const planeMaterial = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide,
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);
plane.rotation.x = -0.5 * Math.PI;

const GridHelper = new THREE.GridHelper(30);
scene.add(GridHelper);

const sphereGeometry  = new THREE.SphereGeometry(4,50,50)
const sphereMaterial = new THREE.MeshBasicMaterial({
  color:0x0000FF,
  wireframe:false,
})
const sphere = new THREE.Mesh(sphereGeometry,sphereMaterial)
sphere.position.set(10,10,10)
scene.add(sphere)






const animate = () => {
  box.rotation.x += 0.01;
  box.rotation.y += 0.01;
  renderer.render(scene, camera);
};

renderer.setAnimationLoop(animate);

renderer.render(scene, camera);
