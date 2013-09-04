define(function(){ return '\
.duiCube {\
  -webkit-animation-duration: 0.8s;\
  animation-duration: 0.8s;\
  -webkit-animation-timing-function: linear;\
  animation-timing-function: linear;\
}\
.duiCube.duiOut {\
  -webkit-animation-name: duiCubeOut;\
  animation-name: duiCubeOut;\
  -webkit-transform-origin: 0% 50% !important;\
  transform-origin: 0% 50% !important;\
}\
.duiCube.duiIn {\
  -webkit-animation-name: duiCubeIn;\
  animation-name: duiCubeIn;\
  -webkit-transform-origin: 100% 50% !important;\
  transform-origin: 100% 50% !important;\
}\
@-webkit-keyframes duiCubeOut {\
  0% {\
    -webkit-transform: scale(1, 1) skew(0deg, 0deg);\
  }\
  50% {\
    -webkit-transform: scale(0.5, 1) skew(0deg, 3deg);\
  }\
  100% {\
    -webkit-transform: scale(0, 1) skew(0deg, 0deg);\
  }\
}\
@keyframes duiCubeOut {\
  0% {\
    transform: scale(1, 1) skew(0deg, 0deg);\
  }\
  50% {\
    transform: scale(0.5, 1) skew(0deg, 3deg);\
  }\
  100% {\
    transform: scale(0, 1) skew(0deg, 0deg);\
  }\
}\
@-webkit-keyframes duiCubeIn {\
  0% {\
    -webkit-transform: scale(0, 1) skew(0deg, 0deg);\
  }\
  50% {\
    -webkit-transform: scale(0.5, 1) skew(0deg, -3deg);\
  }\
  100% {\
    -webkit-transform: scale(1, 1) skew(0deg, 0deg);\
  }\
}\
@keyframes duiCubeIn {\
  0% {\
    transform: scale(0, 1) skew(0deg, 0deg);\
  }\
  50% {\
    transform: scale(0.5, 1) skew(0deg, -3deg);\
  }\
  100% {\
    transform: scale(1, 1) skew(0deg, 0deg);\
  }\
}\
.duiCube.duiOut.duiReverse {\
  -webkit-animation-name: duiCubeOutReverse;\
  animation-name: duiCubeOutReverse;\
  -webkit-transform-origin: 100% 50% !important;\
  transform-origin: 100% 50% !important;\
}\
.duiCube.duiIn.duiReverse {\
  -webkit-animation-name: duiCubeInReverse;\
  animation-name: duiCubeInReverse;\
  -webkit-transform-origin: 0% 50% !important;\
  transform-origin: 0% 50% !important;\
}\
@-webkit-keyframes duiCubeOutReverse {\
  0% {\
    -webkit-transform: scale(1, 1) skew(0deg, 0deg);\
  }\
  50% {\
    -webkit-transform: scale(0.5, 1) skew(0deg, -3deg);\
  }\
  100% {\
    -webkit-transform: scale(0, 1) skew(0deg, 0deg);\
  }\
}\
@keyframes duiCubeOutReverse {\
  0% {\
    transform: scale(1, 1) skew(0deg, 0deg);\
  }\
  50% {\
    transform: scale(0.5, 1) skew(0deg, -3deg);\
  }\
  100% {\
    transform: scale(0, 1) skew(0deg, 0deg);\
  }\
}\
@-webkit-keyframes duiCubeInReverse {\
  0% {\
    -webkit-transform: scale(0, 1) skew(0deg, 0deg);\
  }\
  50% {\
    -webkit-transform: scale(0.5, 1) skew(0deg, 3deg);\
  }\
  100% {\
    -webkit-transform: scale(1, 1) skew(0deg, 0deg);\
  }\
}\
@keyframes duiCubeInReverse {\
  0% {\
    transform: scale(0, 1) skew(0deg, 0deg);\
  }\
  50% {\
    transform: scale(0.5, 1) skew(0deg, 3deg);\
  }\
  100% {\
    transform: scale(1, 1) skew(0deg, 0deg);\
  }\
}\
.dj_ios .duiCube {\
  -webkit-transform-style: preserve-3d !important;\
}\
.dj_ios .duiCube.duiOut {\
  -webkit-animation-name: duiCubeOut_iphone;\
  animation-name: duiCubeOut_iphone;\
  -webkit-transform-origin: 50% 50% !important;\
  transform-origin: 50% 50% !important;\
}\
.dj_ios .duiCube.duiIn {\
  -webkit-animation-name: duiCubeIn_iphone;\
  animation-name: duiCubeIn_iphone;\
  -webkit-transform-origin: 50% 50% !important;\
  transform-origin: 50% 50% !important;\
}\
@-webkit-keyframes duiCubeOut_iphone {\
  from {\
    -webkit-transform: scale3d(0.835, 0.835, 0.835) rotateY(0deg) translateZ(160px);\
  }\
  to {\
    -webkit-transform: scale3d(0.835, 0.835, 0.835) rotateY(-90deg) translateZ(160px);\
  }\
}\
@keyframes duiCubeOut_iphone {\
  from {\
    transform: scale3d(0.835, 0.835, 0.835) rotateY(0deg) translateZ(160px);\
  }\
  to {\
    transform: scale3d(0.835, 0.835, 0.835) rotateY(-90deg) translateZ(160px);\
  }\
}\
@-webkit-keyframes duiCubeIn_iphone {\
  from {\
    -webkit-transform: scale3d(0.835, 0.835, 0.835) rotateY(90deg) translateZ(160px);\
  }\
  to {\
    -webkit-transform: scale3d(0.835, 0.835, 0.835) rotateY(0deg) translateZ(160px);\
  }\
}\
@keyframes duiCubeIn_iphone {\
  from {\
    transform: scale3d(0.835, 0.835, 0.835) rotateY(90deg) translateZ(160px);\
  }\
  to {\
    transform: scale3d(0.835, 0.835, 0.835) rotateY(0deg) translateZ(160px);\
  }\
}\
.dj_ios.dj_landscape .duiCube.duiOut {\
  -webkit-animation-name: duiCubeOut_iphone_l;\
  animation-name: duiCubeOut_iphone_l;\
  -webkit-transform-origin: 50% 50% !important;\
  transform-origin: 50% 50% !important;\
}\
.dj_ios.dj_landscape .duiCube.duiIn {\
  -webkit-animation-name: duiCubeIn_iphone_l;\
  animation-name: duiCubeIn_iphone_l;\
  -webkit-transform-origin: 50% 50% !important;\
  transform-origin: 50% 50% !important;\
}\
@-webkit-keyframes duiCubeOut_iphone_l {\
  from {\
    -webkit-transform: scale3d(0.77, 0.77, 0.77) rotateY(0deg) translateZ(240px);\
  }\
  to {\
    -webkit-transform: scale3d(0.77, 0.77, 0.77) rotateY(-90deg) translateZ(240px);\
  }\
}\
@keyframes duiCubeOut_iphone_l {\
  from {\
    transform: scale3d(0.77, 0.77, 0.77) rotateY(0deg) translateZ(240px);\
  }\
  to {\
    transform: scale3d(0.77, 0.77, 0.77) rotateY(-90deg) translateZ(240px);\
  }\
}\
@-webkit-keyframes duiCubeIn_iphone_l {\
  from {\
    -webkit-transform: scale3d(0.77, 0.77, 0.77) rotateY(90deg) translateZ(240px);\
  }\
  to {\
    -webkit-transform: scale3d(0.77, 0.77, 0.77) rotateY(0deg) translateZ(240px);\
  }\
}\
@keyframes duiCubeIn_iphone_l {\
  from {\
    transform: scale3d(0.77, 0.77, 0.77) rotateY(90deg) translateZ(240px);\
  }\
  to {\
    transform: scale3d(0.77, 0.77, 0.77) rotateY(0deg) translateZ(240px);\
  }\
}\
.dj_ios .duiCube.duiOut.duiReverse {\
  -webkit-animation-name: duiCubeOutReverse_iphone;\
  animation-name: duiCubeOutReverse_iphone;\
  -webkit-transform-origin: 50% 50% !important;\
  transform-origin: 50% 50% !important;\
}\
.dj_ios .duiCube.duiIn.duiReverse {\
  -webkit-animation-name: duiCubeInReverse_iphone;\
  animation-name: duiCubeInReverse_iphone;\
  -webkit-transform-origin: 50% 50% !important;\
  transform-origin: 50% 50% !important;\
}\
@-webkit-keyframes duiCubeOutReverse_iphone {\
  from {\
    -webkit-transform: scale3d(0.835, 0.835, 0.835) rotateY(0deg) translateZ(160px);\
  }\
  to {\
    -webkit-transform: scale3d(0.835, 0.835, 0.835) rotateY(90deg) translateZ(160px);\
  }\
}\
@keyframes duiCubeOutReverse_iphone {\
  from {\
    transform: scale3d(0.835, 0.835, 0.835) rotateY(0deg) translateZ(160px);\
  }\
  to {\
    transform: scale3d(0.835, 0.835, 0.835) rotateY(90deg) translateZ(160px);\
  }\
}\
@-webkit-keyframes duiCubeInReverse_iphone {\
  from {\
    -webkit-transform: scale3d(0.835, 0.835, 0.835) rotateY(-90deg) translateZ(160px);\
  }\
  to {\
    -webkit-transform: scale3d(0.835, 0.835, 0.835) rotateY(0deg) translateZ(160px);\
  }\
}\
@keyframes duiCubeInReverse_iphone {\
  from {\
    transform: scale3d(0.835, 0.835, 0.835) rotateY(-90deg) translateZ(160px);\
  }\
  to {\
    transform: scale3d(0.835, 0.835, 0.835) rotateY(0deg) translateZ(160px);\
  }\
}\
.dj_ios.dj_landscape .duiCube.duiOut.duiReverse {\
  -webkit-animation-name: duiCubeOutReverse_iphone_l;\
  animation-name: duiCubeOutReverse_iphone_l;\
  -webkit-transform-origin: 50% 50% !important;\
  transform-origin: 50% 50% !important;\
}\
.dj_ios.dj_landscape .duiCube.duiIn.duiReverse {\
  -webkit-animation-name: duiCubeInReverse_iphone_l;\
  animation-name: duiCubeInReverse_iphone_l;\
  -webkit-transform-origin: 50% 50% !important;\
  transform-origin: 50% 50% !important;\
}\
@-webkit-keyframes duiCubeOutReverse_iphone_l {\
  from {\
    -webkit-transform: scale3d(0.77, 0.77, 0.77) rotateY(0deg) translateZ(240px);\
  }\
  to {\
    -webkit-transform: scale3d(0.77, 0.77, 0.77) rotateY(90deg) translateZ(240px);\
  }\
}\
@keyframes duiCubeOutReverse_iphone_l {\
  from {\
    transform: scale3d(0.77, 0.77, 0.77) rotateY(0deg) translateZ(240px);\
  }\
  to {\
    transform: scale3d(0.77, 0.77, 0.77) rotateY(90deg) translateZ(240px);\
  }\
}\
@-webkit-keyframes duiCubeInReverse_iphone_l {\
  from {\
    -webkit-transform: scale3d(0.77, 0.77, 0.77) rotateY(-90deg) translateZ(240px);\
  }\
  to {\
    -webkit-transform: scale3d(0.77, 0.77, 0.77) rotateY(0deg) translateZ(240px);\
  }\
}\
@keyframes duiCubeInReverse_iphone_l {\
  from {\
    transform: scale3d(0.77, 0.77, 0.77) rotateY(-90deg) translateZ(240px);\
  }\
  to {\
    transform: scale3d(0.77, 0.77, 0.77) rotateY(0deg) translateZ(240px);\
  }\
}\
.dj_ipad.dj_ios .duiCube.duiOut {\
  -webkit-animation-name: duiCubeOut_ipad;\
  animation-name: duiCubeOut_ipad;\
  -webkit-transform-origin: 50% 50% !important;\
  transform-origin: 50% 50% !important;\
}\
.dj_ipad.dj_ios .duiCube.duiIn {\
  -webkit-animation-name: duiCubeIn_ipad;\
  animation-name: duiCubeIn_ipad;\
  -webkit-transform-origin: 50% 50% !important;\
  transform-origin: 50% 50% !important;\
}\
@-webkit-keyframes duiCubeOut_ipad {\
  from {\
    -webkit-transform: scale3d(0.806, 0.806, 0.806) rotateY(0deg) translateZ(384px);\
  }\
  to {\
    -webkit-transform: scale3d(0.806, 0.806, 0.806) rotateY(-90deg) translateZ(384px);\
  }\
}\
@keyframes duiCubeOut_ipad {\
  from {\
    transform: scale3d(0.806, 0.806, 0.806) rotateY(0deg) translateZ(384px);\
  }\
  to {\
    transform: scale3d(0.806, 0.806, 0.806) rotateY(-90deg) translateZ(384px);\
  }\
}\
@-webkit-keyframes duiCubeIn_ipad {\
  from {\
    -webkit-transform: scale3d(0.806, 0.806, 0.806) rotateY(90deg) translateZ(384px);\
  }\
  to {\
    -webkit-transform: scale3d(0.806, 0.806, 0.806) rotateY(0deg) translateZ(384px);\
  }\
}\
@keyframes duiCubeIn_ipad {\
  from {\
    transform: scale3d(0.806, 0.806, 0.806) rotateY(90deg) translateZ(384px);\
  }\
  to {\
    transform: scale3d(0.806, 0.806, 0.806) rotateY(0deg) translateZ(384px);\
  }\
}\
.dj_ipad.dj_ios.dj_landscape .duiCube.duiOut {\
  -webkit-animation-name: duiCubeOut_ipad_l;\
  animation-name: duiCubeOut_ipad_l;\
  -webkit-transform-origin: 50% 50% !important;\
  transform-origin: 50% 50% !important;\
}\
.dj_ipad.dj_ios.dj_landscape .duiCube.duiIn {\
  -webkit-animation-name: duiCubeIn_ipad_l;\
  animation-name: duiCubeIn_ipad_l;\
  -webkit-transform-origin: 50% 50% !important;\
  transform-origin: 50% 50% !important;\
}\
@-webkit-keyframes duiCubeOut_ipad_l {\
  from {\
    -webkit-transform: scale3d(0.758, 0.758, 0.758) rotateY(0deg) translateZ(512px);\
  }\
  to {\
    -webkit-transform: scale3d(0.758, 0.758, 0.758) rotateY(-90deg) translateZ(512px);\
  }\
}\
@keyframes duiCubeOut_ipad_l {\
  from {\
    transform: scale3d(0.758, 0.758, 0.758) rotateY(0deg) translateZ(512px);\
  }\
  to {\
    transform: scale3d(0.758, 0.758, 0.758) rotateY(-90deg) translateZ(512px);\
  }\
}\
@-webkit-keyframes duiCubeIn_ipad_l {\
  from {\
    -webkit-transform: scale3d(0.758, 0.758, 0.758) rotateY(90deg) translateZ(512px);\
  }\
  to {\
    -webkit-transform: scale3d(0.758, 0.758, 0.758) rotateY(0deg) translateZ(512px);\
  }\
}\
@keyframes duiCubeIn_ipad_l {\
  from {\
    transform: scale3d(0.758, 0.758, 0.758) rotateY(90deg) translateZ(512px);\
  }\
  to {\
    transform: scale3d(0.758, 0.758, 0.758) rotateY(0deg) translateZ(512px);\
  }\
}\
.dj_ipad.dj_ios .duiCube.duiOut.duiReverse {\
  -webkit-animation-name: duiCubeOutReverse_ipad;\
  animation-name: duiCubeOutReverse_ipad;\
  -webkit-transform-origin: 50% 50% !important;\
  transform-origin: 50% 50% !important;\
}\
.dj_ipad.dj_ios .duiCube.duiIn.duiReverse {\
  -webkit-animation-name: duiCubeInReverse_ipad;\
  animation-name: duiCubeInReverse_ipad;\
  -webkit-transform-origin: 50% 50% !important;\
  transform-origin: 50% 50% !important;\
}\
@-webkit-keyframes duiCubeOutReverse_ipad {\
  from {\
    -webkit-transform: scale3d(0.806, 0.806, 0.806) rotateY(0deg) translateZ(384px);\
  }\
  to {\
    -webkit-transform: scale3d(0.806, 0.806, 0.806) rotateY(90deg) translateZ(384px);\
  }\
}\
@keyframes duiCubeOutReverse_ipad {\
  from {\
    transform: scale3d(0.806, 0.806, 0.806) rotateY(0deg) translateZ(384px);\
  }\
  to {\
    transform: scale3d(0.806, 0.806, 0.806) rotateY(90deg) translateZ(384px);\
  }\
}\
@-webkit-keyframes duiCubeInReverse_ipad {\
  from {\
    -webkit-transform: scale3d(0.806, 0.806, 0.806) rotateY(-90deg) translateZ(384px);\
  }\
  to {\
    -webkit-transform: scale3d(0.806, 0.806, 0.806) rotateY(0deg) translateZ(384px);\
  }\
}\
@keyframes duiCubeInReverse_ipad {\
  from {\
    transform: scale3d(0.806, 0.806, 0.806) rotateY(-90deg) translateZ(384px);\
  }\
  to {\
    transform: scale3d(0.806, 0.806, 0.806) rotateY(0deg) translateZ(384px);\
  }\
}\
.dj_ipad.dj_ios.dj_landscape .duiCube.duiOut.duiReverse {\
  -webkit-animation-name: duiCubeOutReverse_ipad_l;\
  animation-name: duiCubeOutReverse_ipad_l;\
  -webkit-transform-origin: 50% 50% !important;\
  transform-origin: 50% 50% !important;\
}\
.dj_ipad.dj_ios.dj_landscape .duiCube.duiIn.duiReverse {\
  -webkit-animation-name: duiCubeInReverse_ipad_l;\
  animation-name: duiCubeInReverse_ipad_l;\
  -webkit-transform-origin: 50% 50% !important;\
  transform-origin: 50% 50% !important;\
}\
@-webkit-keyframes duiCubeOutReverse_ipad_l {\
  from {\
    -webkit-transform: scale3d(0.758, 0.758, 0.758) rotateY(0deg) translateZ(512px);\
  }\
  to {\
    -webkit-transform: scale3d(0.758, 0.758, 0.758) rotateY(90deg) translateZ(512px);\
  }\
}\
@keyframes duiCubeOutReverse_ipad_l {\
  from {\
    transform: scale3d(0.758, 0.758, 0.758) rotateY(0deg) translateZ(512px);\
  }\
  to {\
    transform: scale3d(0.758, 0.758, 0.758) rotateY(90deg) translateZ(512px);\
  }\
}\
@-webkit-keyframes duiCubeInReverse_ipad_l {\
  from {\
    -webkit-transform: scale3d(0.758, 0.758, 0.758) rotateY(-90deg) translateZ(512px);\
  }\
  to {\
    -webkit-transform: scale3d(0.758, 0.758, 0.758) rotateY(0deg) translateZ(512px);\
  }\
}\
@keyframes duiCubeInReverse_ipad_l {\
  from {\
    transform: scale3d(0.758, 0.758, 0.758) rotateY(-90deg) translateZ(512px);\
  }\
  to {\
    transform: scale3d(0.758, 0.758, 0.758) rotateY(0deg) translateZ(512px);\
  }\
}\
'; } );
