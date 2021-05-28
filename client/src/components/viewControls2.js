// const showRotation = () => {
//     console.log(document.getElementsByClassName('Game')[0].style["transform"]);
//   }
  
  let mouseIsDown = false;
  let initMouseX = null;
  let initMouseY = null;
  let initRotationX = 0;
  let initRotationY = 0;
  let initRotationZ = 0;
  let invertXRotation = false;
  let activeAxes = "XY";
  
  const onMouseDown = (e) => {
      let x = (e.touches) ? e.touches[0].clientX : e.clientX;
      let y = (e.touches) ? e.touches[0].clientY : e.clientY;
      initMouseX = x;
      initMouseY = y;
      let initRotation = parseRotationValues();
      initRotationY = initRotation[0];
      initRotationX = initRotation[1];
      initRotationZ = initRotation[2];
      mouseIsDown = true;

  }

  const parseRotationValues = () => {
    let newCubeX = 0;
    let newCubeY = 0;
    let newCubeZ = 0;
    let cubeTransform;
    if (document.getElementsByClassName('Game')[0]) {
      cubeTransform = document.getElementsByClassName('Game')[0].style.transform;
      console.log("ct: ", cubeTransform);
    }
    if (cubeTransform) {
      let cubeY = cubeTransform.split(' ')[0];
      let cubeX = cubeTransform.split(' ')[1];
      let cubeZ = cubeTransform.split(' ')[2];
      newCubeY = cubeY.slice(8, cubeY.length - 4);
      newCubeX = cubeX.slice(8, cubeX.length - 4);
      newCubeZ = cubeZ.slice(8, cubeZ.length - 4);
    }
    return [newCubeY, newCubeX, newCubeZ];
  }

  const determineAxes = () => {
    let activeAxis;
    let currentYRotateVal = Math.abs(Number(parseRotationValues()[0]) % 360);
    let currentXRotateVal = Math.abs(Number(parseRotationValues()[1]) % 360);
    let currentZRotateVal = Math.abs(Number(parseRotationValues()[2]) % 360);
    
  }
  
  const onMouseMoving = (e) => {
    let x = (e.touches) ? e.touches[0].clientX : e.clientX;
    let y = (e.touches) ? e.touches[0].clientY : e.clientY;
    if (document.getElementsByClassName('Game')[0]) {
        let cube = document.getElementsByClassName('Game')[0];
        if (mouseIsDown === true) {
          let zRotate = 0;
          let yRotate = x - initMouseX + Number(initRotationY);
          let xRotate;
          if (invertXRotation) {
            xRotate = y - initMouseY + Number(initRotationX);
          } else {
            xRotate = initMouseY - y + Number(initRotationX);
          }
          let rotatePhrase = `rotateY(${yRotate}deg) rotateX(${xRotate}deg) rotateZ(${zRotate}deg)`;
          cube.style.transform = rotatePhrase;   
          console.log(rotatePhrase);
      }      
    }    
  }


  
  const onMouseUp = () => {
      mouseIsDown = false;
      let currentYRotateVal = Math.abs(Number(parseRotationValues()[0]) % 360);
      invertXRotation = (currentYRotateVal > 90 && currentYRotateVal < 270) ? true : false;

  }

  // const setZeroRotation = () => {
  //   let planeY = document.getElementsByClassName('planeY')[0];
  //   let planeX = document.getElementsByClassName('planeX')[0];
  //   let rotatePhraseY = `rotateY(0deg)`;
  //       let rotatePhraseX = `rotateX(0deg)`;
  //       planeY.style.transform = rotatePhraseY;   
  //       planeX.style.transform = rotatePhraseX;
  // }

//  document.getElementsByTagName('HTML')[0].addEventListener('mousedown', setZeroRotation);
  
//   const changeDistance = (e) => {
//     let wrapper = document.getElementById('wrapper');
//     let distance = e.target.value;
//     let newDistance = `${distance}px`;
//     wrapper.style.perspective = newDistance;
//   }
  
  
//   let isSliderClicked = false;
  
//   const mouseDownSlider = () => {
//     isSliderClicked = true;
//     document.getElementsByTagName('HTML')[0].removeEventListener('mousedown', onMouseDown);
//     document.getElementsByTagName('HTML')[0].removeEventListener('mousemove', onMouseMoving);
//     document.getElementsByTagName('HTML')[0].removeEventListener('mouseup', onMouseUp);
//     document.getElementsByTagName('HTML')[0].removeEventListener('touchstart', onMouseDown);
//     document.getElementsByTagName('HTML')[0].removeEventListener('touchend', onMouseMoving);
//     document.getElementsByTagName('HTML')[0].removeEventListener('touchmove', onMouseUp);
//   }
  
//   const mouseUpSlider = () => {
//     isSliderClicked = false;
//     document.getElementsByTagName('HTML')[0].addEventListener('mousedown', onMouseDown);
//     document.getElementsByTagName('HTML')[0].addEventListener('mousemove', onMouseMoving);
//     document.getElementsByTagName('HTML')[0].addEventListener('mouseup', onMouseUp);
//     document.getElementsByTagName('HTML')[0].addEventListener('touchstart', onMouseDown);
//     document.getElementsByTagName('HTML')[0].addEventListener('touchend', onMouseMoving);
//     document.getElementsByTagName('HTML')[0].addEventListener('touchmove', onMouseUp);
    
//   }
  
//   let id = null;
//   const adjustSize = (e) => {
//     clearInterval(id);
//     id = setInterval(frame, 5);
//     console.log("isSliderClicked: ", isSliderClicked);
//     function frame() {
//       if (isSliderClicked !== true) {
//         clearInterval(id);
//       } else {
//         let wrapper = document.getElementById('wrapper');
//         let distance = e.target.value;
//         let newDistance = `${distance}px`;
//         wrapper.style.perspective = newDistance;
//       }
//     }
//   } 
  

export const addViewControls = () => {  
  // document.getElementById('slider').addEventListener('change', changeDistance);
//   document.getElementById('slider').addEventListener('mousedown', mouseDownSlider);
//   document.getElementById('slider').addEventListener('mouseup', mouseUpSlider);
//   document.getElementById('slider').addEventListener('mousemove', adjustSize);
//   document.getElementById('slider').addEventListener('touchstart', mouseDownSlider);
//   document.getElementById('slider').addEventListener('touchend', mouseUpSlider);
//   document.getElementById('slider').addEventListener('touchmove', adjustSize);
//   document.getElementById('slider').addEventListener('click', changeDistance);
//   document.getElementsByTagName('HTML')[0].addEventListener('click', showRotation);
  document.getElementsByTagName('HTML')[0].addEventListener('mousedown', onMouseDown);
  document.getElementsByTagName('HTML')[0].addEventListener('mousemove', onMouseMoving);
  document.getElementsByTagName('HTML')[0].addEventListener('mouseup', onMouseUp);
  document.getElementsByTagName('HTML')[0].addEventListener('touchstart', onMouseDown);
  document.getElementsByTagName('HTML')[0].addEventListener('touchmove', onMouseMoving);
  document.getElementsByTagName('HTML')[0].addEventListener('touchend', onMouseUp);
}