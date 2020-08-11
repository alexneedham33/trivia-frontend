import React, { useState, createContext } from "react";
import { Link } from "react-router-dom";
import "./Wheel.css";

export let degNumIndex;

function Wheel({item}) {
  // let durNum = Math.floor(5 + Math.random() * 5); //random duration
  let durString = '5s'
  let degNum = Math.floor(Math.random() * 360); // random
  degNumIndex = Math.floor(degNum / 72);
  let catList = ["North ", "Central ", "Southern", "Pacific", "General"];
  let categoryString = catList[degNumIndex];
  console.log(categoryString);
  let offSetDegNum = 1800 + degNum;
  let degString = offSetDegNum + "deg";
  console.log(degString);


  function toggleAnimation() {
    document.getElementById("spinBtn").style.setProperty("display", "none");
    document.getElementById("wheelContainer").style.setProperty("--playState", "running");
    document.getElementById("wheelContainer").style.setProperty("--dur", durString);
    document.getElementById("wheelContainer").style.setProperty("--deg", degString);
    document.getElementById("instruction").classList.add("instructionSlide");
  }

  return (
    <div id="wheelContainer">
      <button id="spinBtn" onClick={toggleAnimation}>
        CLICK TO SPIN!
      </button>
      <svg id="svgWheel" viewBox="0 0 300 300">
        <path
          fill="#e6e6e6"
          paintOrder="markers fill stroke"
          d="M.448.897h300v300h-300z"
        />
        <g
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity={0.883}
          strokeWidth={1.323}
          paintOrder="markers fill stroke"
        >
          <path
            d="M292.4 103.089A150 150.88 0 00150.09-.091a150 150.88 0 00-1.414.008l1.414 150.87z"
            fill="#0ff"
          />
          <path
            d="M239.47 272.34a150 150.88 0 0060.984-121.44 150 150.88 0 00-7.148-46.02l-142.54 47.777z"
            fill="#ff0"
          />
          <path
            d="M63.44 273.8a150 150.88 0 0087.006 27.977 150 150.88 0 0087.592-28.398l-88.865-119.89z"
            fill="#f0f"
          />
          <path
            d="M6.69 107.84a150 150.88 0 00-6.238 43.056 150 150.88 0 0061.564 121.87l85.88-120.52z"
            fill="#0f0"
          />
          <path
            d="M147.27.05A150 150.88 0 007.2 106.15l141.48 44.494z"
            fill="red"
          />
          <path
            d="M147.27.05l1.41 150.59L7.2 106.146a150 150.88 0 00-.51 1.69l141.21 44.406-85.88 120.52a150 150.88 0 001.43 1.035l85.731-120.31 88.865 119.89a150 150.88 0 001.424-1.043l-88.71-119.68 142.54-47.777a150 150.88 0 00-.544-1.68l-142.31 47.699L149.032.026a150 150.88 0 00-1.766.027z"
            fill="teal"
          />
        </g>
        <g
          style={{
            whiteSpace: "pre",
          }}
          aria-label="Pacific"
          id="category3"
        >
          <path d="M19.024 149.161q-1.01-.02-1.976-.457-.956-.438-1.603-1.228-.877-1.082-1.317-2.406-.44-1.313-.416-3.262l.033-2.859-4.902-.096.054-4.593 15.05.295-.09 7.56q-.02 1.698-.285 2.853-.257 1.167-.762 2.055-.61 1.064-1.546 1.608-.936.556-2.24.53zm-.035-4.75q.636.013 1.096-.385.47-.398.658-.932.25-.713.279-1.394.038-.682.052-1.818l.009-.79-4.508-.088-.015 1.316q-.014 1.172.098 1.928.113.768.47 1.29.319.448.761.648.453.213 1.1.225zM13.064 164.687l2.345-.356q-.156-.857-.377-1.849-.212-.993-.41-1.494-.241-.615-.61-.909-.358-.283-.889-.203-.35.054-.563.158-.213.105-.382.42-.17.303-.228.698-.048.394.04 1.2.072.641.364 1.26.294.631.71 1.075zm-1.744.264q-.258-.31-.626-.773-.367-.463-.597-.887-.31-.592-.495-1.252-.195-.658-.284-1.465-.21-1.898.64-3.33t2.394-1.666q1.233-.187 2.087.347.854.534 1.437 1.664.583 1.118.967 2.845.385 1.727.684 3.6l.06-.01q.932-.141 1.183-1.096.261-.956.067-2.712-.117-1.056-.57-2.206-.443-1.151-.671-1.648l-.044-.391 2.716-.412q.225.653.594 2.142.38 1.498.549 3.029.403 3.642-.371 5.4-.763 1.769-2.787 2.076l-7.657 1.162-.469-4.236zM13.401 185.11q-.388-1.7-.368-3.217.023-1.506.498-2.772.478-1.254 1.432-2.163.953-.91 2.407-1.37 1.532-.485 2.782-.236 1.252.26 2.232 1.115.932.832 1.568 2.105t.973 2.753q.304 1.329.315 2.527.012 1.198-.157 2.292l-2.995.949-.135-.59q.12-.298.276-.719.157-.409.268-.977.107-.542.114-1.151.018-.613-.154-1.364-.38-1.664-1.483-2.281-1.09-.609-2.623-.124-1.58.5-2.192 1.673-.609 1.184-.224 2.871.18.786.468 1.364.301.586.601.937.285.331.568.564.283.232.546.422l.135.589-2.996.948q-.614-.858-1.084-1.862-.477-.99-.772-2.283zM18.306 200.932l-1.32-4.016 10.577-4.843 1.32 4.017zm12.121-5.42l-1.394-4.24 2.572-1.178 1.394 4.24zM36.39 210.233l-.122-.289q-.046-.294-.142-.76-.09-.455-.29-.926-.481-1.134-.997-1.338-.51-.193-1.495.389l-.082.048 1.262 2.976-2.204 1.303-1.207-2.848-7.94 4.694-1.633-3.853 7.94-4.694-.699-1.648 2.204-1.303.699 1.648.28-.165q1.86-1.1 3.285-.484 1.43.628 2.437 3.004.363.856.603 1.584.25.722.396 1.306zM29.554 226.594l-1.93-3.657 9.624-7.094 1.93 3.657zm11.048-8.003l-2.037-3.86 2.34-1.725 2.037 3.86zM37.312 239.944q-.918-1.386-1.4-2.794-.477-1.399-.458-2.785.025-1.376.602-2.655.576-1.28 1.761-2.376 1.249-1.155 2.48-1.504 1.237-.34 2.42-.005 1.132.336 2.137 1.215 1.005.88 1.804 2.087.718 1.084 1.124 2.183t.613 2.185l-2.442 2.26-.318-.482q.012-.33.016-.79.01-.45-.076-1.024-.08-.549-.275-1.114-.186-.573-.592-1.185-.899-1.358-2.117-1.417-1.204-.056-2.452 1.1-1.289 1.192-1.464 2.555-.168 1.372.743 2.75.424.64.88 1.04.47.4.862.585.371.173.709.257.337.083.641.136l.318.48-2.44 2.26q-.85-.507-1.613-1.215-.764-.69-1.463-1.747z" />
        </g>
        <g
          style={{
            whiteSpace: "pre",
          }}
          aria-label="Central"
          id="category1"
        >
          <path d="M258.179 240.095q-1.155 1.423-2.518 2.258-1.357.826-2.817.952t-2.984-.499q-1.516-.634-3-2.083-1.385-1.349-2.142-2.901-.757-1.552-.86-3.203-.1-1.586.473-3.223.58-1.646 1.761-3.103.654-.806 1.261-1.365.607-.575 1.185-.994.614-.43 1.177-.71.563-.295 1.004-.494l2.822 2.752-.306.377q-.382.057-.94.174-.55.108-1.175.327-.632.228-1.25.608-.616.381-1.124 1.007-.563.694-.868 1.518-.312.816-.282 1.797.036.94.513 1.974.485 1.026 1.532 2.047 1.095 1.068 2.1 1.45 1.014.374 1.853.271.854-.103 1.563-.563.701-.468 1.21-1.093.486-.6.794-1.343.316-.752.438-1.523.114-.641.148-1.253.034-.612.034-1.026l.278-.343 2.783 2.714q-.194.67-.376 1.276-.183.604-.447 1.206-.344.786-.703 1.419-.359.632-1.137 1.592zM268.01 215.285l-4.752 7.886q1.199.758 2.34.32 1.148-.447 2.186-2.17.657-1.09.917-2.374.259-1.283.206-2.174l.23-.383 2.524 1.828q-.276 1.477-.707 2.65-.431 1.173-1.187 2.426-1.949 3.235-4.314 3.997-2.365.761-4.818-1.016-2.426-1.758-2.86-4.409-.437-2.667 1.276-5.51 1.58-2.622 3.59-3.064 2-.448 4.27 1.196zm-3.906 2.092q-1.003-.686-1.807-.539-.803.147-1.449 1.219-.6.995-.515 1.978.085.982 1.078 1.811zM280.834 199.875l-1.614 3.756-5.272-2.724q-.643-.333-1.308-.588-.675-.26-1.054-.24-.44.027-.774.348-.33.312-.638 1.028-.219.508-.295 1.115-.071.598-.004 1.38l7.534 3.894-1.606 3.735-10.628-5.492 1.606-3.735 1.174.606q-.282-1.363-.268-2.472.018-1.119.5-2.24.812-1.888 2.27-2.428 1.463-.55 3.46.482zM285.814 183.835q-.038.686-.168 1.423-.12.741-.424 1.767-.679 2.291-1.857 3.114-1.176.812-3.225.082l-5.225-1.86-.478 1.615-2.428-.864.478-1.615-3.194-1.137 1.163-3.928 3.194 1.137 1.089-3.676 2.428.864-1.089 3.677 3.96 1.41q.588.208 1.029.353.441.145.838.106.393-.03.715-.337.316-.322.535-1.063.09-.306.117-.84.029-.544-.012-.776l.097-.327zM281.336 165.785l-.068.36q-.131.239-.28.802-.15.564-.223.946-.164.864-.187 1.55-.023.686.078 1.506l7.703 1.756-.767 4.043-11.503-2.622.767-4.043 1.69.385q-.792-1.575-.942-2.64-.161-1.068-.003-1.899.04-.213.102-.48.061-.268.12-.465zM287.803 152.375l-2.44-.214q.001.84.045 1.822.033.981.142 1.497.133.633.453.995.31.35.863.398.365.032.6-.017.234-.048.462-.304.228-.245.359-.602.12-.357.177-1.135.045-.617-.138-1.266-.183-.66-.523-1.174zm1.814.16q.206.35.493.871.287.52.443.971.206.628.274 1.29.077.663.02 1.44-.133 1.83-1.256 2.974-1.122 1.144-2.728 1.003-1.283-.112-2.05-.813t-1.153-1.896q-.386-1.184-.46-2.894-.075-1.71-.037-3.536l-.062-.005q-.97-.085-1.398.752-.44.836-.563 2.528-.074 1.018.175 2.202.24 1.183.38 1.702l-.028.377-2.826-.248q-.109-.665-.21-2.147-.112-1.494-.004-2.97.256-3.51 1.36-4.978 1.095-1.48 3.202-1.296l7.967.7-.298 4.081zM291.013 135.735l.123 4.127-16.27.584-.123-4.127z" />
        </g>
        <g
          style={{
            whiteSpace: "pre",
          }}
          aria-label="Southern"
          id="category2"
        >
          <path d="M95.3 274.088q-1.179 1.99-3.815 2.344-2.62.35-5.866-1.178-1.876-.884-3.105-1.832-1.212-.953-2.162-1.978l1.913-3.228.426.2q.698 1.428 1.916 2.591 1.228 1.168 2.607 1.818.355.167.965.385t1.05.263q.544.048.972-.063.44-.106.723-.585.263-.443.024-.96-.223-.521-.932-1.075-.745-.582-1.608-1.185-.846-.606-1.534-1.242-1.58-1.45-1.864-2.786-.27-1.341.561-2.742 1.115-1.88 3.703-2.177 2.604-.3 5.576 1.1 1.49.701 2.786 1.646 1.31.941 2.145 1.831l-1.838 3.101-.416-.195Q97 267.06 95.93 266q-1.056-1.065-2.436-1.714-.487-.23-1.011-.395-.509-.17-1.052-.218-.476-.05-.926.096-.444.137-.653.49-.316.533-.031 1.038.29.495 1.419 1.327.74.545 1.415 1.048.685.508 1.418 1.176 1.434 1.323 1.736 2.587.317 1.26-.508 2.652zM114.45 279.543q-1.066 2.668-3.432 3.654-2.352.98-5.507-.022-3.156-1.002-4.294-3.09-1.124-2.093-.058-4.761 1.073-2.687 3.436-3.663 2.373-.973 5.507.022 3.177 1.009 4.29 3.099 1.124 2.093.058 4.761zm-5.838 1.11q.544-.294.959-.814.429-.525.84-1.556.382-.954.445-1.66.063-.708-.129-1.203-.188-.505-.608-.823t-.983-.496q-.562-.179-1.059-.184-.486-.003-1.048.275-.506.262-.984.849-.467.59-.863 1.582-.355.886-.433 1.6-.074.703.125 1.21.196.486.602.81.417.328 1.033.524.53.168 1.067.165.551-.01 1.036-.279zM132.5 289.019l-4.05-.72.278-1.244q-1.295.562-2.319.798-1.02.225-2.314-.005-2.093-.372-2.989-1.647-.885-1.273-.416-3.368l1.64-7.33 4.072.724-1.25 5.585q-.19.852-.262 1.434-.058.573.084.984.13.41.52.656.4.248 1.177.386.517.092 1.186.034.668-.059 1.327-.286l1.785-7.982 4.05.72zM149.49 290.311q-.676.112-1.426.146-.751.046-1.827-.022-2.402-.15-3.513-1.092-1.098-.94-.932-3.041l.423-5.355-1.694-.106.197-2.489 1.693.106.259-3.274 4.12.259-.26 3.274 3.857.242-.197 2.489-3.856-.242-.32 4.06q-.048.6-.072 1.05-.024.45.12.818.131.367.515.606.396.23 1.174.279.32.02.845-.07.536-.09.75-.179l.343.022zM169.75 289.91l-4.146.206-.355-5.687q-.043-.694-.166-1.374-.124-.69-.339-1.007-.252-.367-.71-.518-.446-.152-1.236-.113-.561.028-1.135.22-.563.192-1.216.583l.507 8.126-4.123.205-.992-15.886 4.124-.204.354 5.686q1.052-.82 2.035-1.278.993-.46 2.23-.52 2.085-.104 3.32.92 1.248 1.024 1.382 3.178zM189.72 281.71l-9.269 1.652q.387 1.307 1.58 1.824 1.203.516 3.228.155 1.282-.229 2.393-.854 1.112-.626 1.703-1.222l.45-.08.65 2.898q-1.262.736-2.427 1.173t-2.639.7q-3.802.677-6.168-.486-2.367-1.163-2.999-3.98-.625-2.788.923-4.753 1.556-1.977 4.897-2.572 3.082-.55 4.947.567 1.863 1.107 2.448 3.714zm-4.502-1.398q-.287-1.127-1.012-1.593t-1.984-.24q-1.17.208-1.802.884-.632.676-.454 1.885zM204.37 274.525l-.348.103q-.28-.003-.849.123-.57.127-.94.237-.837.249-1.443.537-.606.288-1.259.74l2.73 7.294-3.917 1.165-4.076-10.892 3.917-1.165.599 1.6q.924-1.374 1.762-1.98.834-.614 1.64-.853.206-.062.471-.13.265-.067.468-.106zM225.6 274.676l-3.738 1.613-2.783-5.127q-.34-.626-.747-1.211-.412-.595-.747-.813-.392-.252-.88-.235-.477.013-1.19.32-.505.219-.952.593-.436.37-.87.955l3.977 7.326-3.717 1.604-5.612-10.336 3.717-1.603.62 1.14q.616-1.117 1.325-1.877.72-.765 1.834-1.246 1.88-.81 3.463-.29 1.593.518 2.647 2.46z" />
        </g>
        <g
          style={{
            whiteSpace: "pre",
          }}
          aria-label="Northern"
          id="category0"
        >
          <path d="M176.701 26.53l-3.736-.784-3.996-10.693-2.387 9.356-3.554-.745 3.477-13.631 4.635.972 3.492 8.957 1.992-7.808 3.554.745zM197.692 27.983q-1.07 2.415-3.247 3.242-2.163.822-4.972-.201t-3.751-2.977q-.93-1.96.14-4.374 1.079-2.432 3.252-3.251 2.182-.815 4.97.201 2.828 1.03 3.749 2.986.93 1.959-.141 4.374zm-5.316.828q.503-.253.898-.716.41-.469.823-1.402.382-.863.468-1.51.086-.647-.067-1.108-.15-.47-.516-.775-.367-.306-.867-.489-.5-.182-.949-.203-.439-.019-.957.218-.468.224-.923.747-.446.526-.844 1.424-.356.802-.455 1.455-.095.643.064 1.117.157.452.51.763.363.314.911.514.472.172.957.187.498.009.947-.222zM213.189 33.15l-.29-.146q-.167-.171-.608-.438t-.749-.423q-.696-.354-1.28-.542-.585-.19-1.321-.304l-3.808 6.165-3.256-1.652 5.686-9.208 3.256 1.652-.835 1.353q1.592-.29 2.555-.157.968.126 1.638.465.171.087.383.206.212.118.365.217zM220.842 46.65q-.58-.201-1.176-.495-.603-.286-1.396-.799-1.772-1.146-2.13-2.358-.348-1.207.892-2.782l3.16-4.016-1.248-.808 1.468-1.866 1.25.808 1.932-2.456 3.037 1.965-1.932 2.455 2.843 1.84-1.469 1.866-2.843-1.84-2.396 3.045q-.355.451-.612.793t-.34.692q-.093.344.076.695.183.35.757.72.236.154.688.307.46.16.673.181l.253.164zM234.586 57.658l-2.757-2.308 3.917-3.845q.478-.47.896-.976.425-.514.52-.844.109-.383-.069-.748-.17-.36-.695-.8-.373-.312-.874-.527-.493-.208-1.189-.343l-5.597 5.495-2.741-2.295 10.941-10.74 2.741 2.295-3.916 3.844q1.258.095 2.21.38.958.29 1.78.98 1.387 1.16 1.418 2.541.039 1.389-1.445 2.845zM251.167 68.01l-5.392-6.004q-1.01.841-.97 1.927.046 1.093 1.224 2.405.746.83 1.776 1.367 1.03.536 1.813.71l.262.29-2.323 1.715q-1.192-.598-2.076-1.255t-1.74-1.61q-2.213-2.464-2.169-4.677.044-2.213 2.303-3.88 2.234-1.65 4.649-1.371 2.43.279 4.373 2.443 1.793 1.996 1.579 3.826-.206 1.825-2.296 3.367zm-.647-3.86q.889-.692 1-1.416.111-.725-.621-1.54-.681-.759-1.554-.927-.872-.167-1.88.48zM262.489 78.842l-.176-.255q-.056-.223-.3-.65-.246-.425-.433-.696-.423-.614-.835-1.034-.412-.42-.997-.842l-6.609 3.745-1.978-2.868 9.87-5.593 1.978 2.868-1.45.822q1.55.44 2.324.976.782.532 1.189 1.122.104.151.227.347.123.196.205.35zM263.673 97.574l-1.564-3.092 5.247-2.182q.641-.266 1.242-.588.61-.326.839-.597.262-.316.253-.715-.003-.392-.302-.98-.212-.42-.583-.792-.366-.365-.951-.731l-7.5 3.117-1.555-3.074 10.58-4.399 1.556 3.075-1.169.485q1.122.527 1.879 1.122.761.603 1.228 1.525.786 1.555.228 2.841-.553 1.295-2.541 2.121z" />
        </g>
        <g aria-label="General" id="category4">
          <path d="M42.184 82.381q-.19 1.113-.75 2.818-.572 1.7-1.51 3.192-2.173 3.459-5.423 4.342-3.26.878-6.83-1.018-3.403-1.808-4.24-4.887-.848-3.084 1.37-6.615.841-1.338 1.867-2.408 1.015-1.075 2.722-2.147l3.423 1.818-.246.391q-.366.146-1.047.44-.692.288-1.243.602-.645.361-1.317.951-.666.581-1.163 1.373-.584.928-.764 1.84t.05 1.835q.228.886.929 1.707.696.807 1.883 1.438 2.422 1.286 4.456.777 2.034-.51 3.498-2.84.126-.2.265-.442.144-.251.25-.462l-2.863-1.52-1.699 2.702-2.756-1.464 3.93-6.252zM51.527 64.074l-5.891 6.756q1.221.797 2.496.5 1.282-.304 2.57-1.78.815-.934 1.218-2.08.403-1.145.432-1.96l.286-.329 2.549 1.89q-.44 1.32-1.019 2.35-.578 1.03-1.514 2.103-2.417 2.771-5.044 3.253-2.628.482-5.106-1.355-2.452-1.818-2.665-4.27-.214-2.469 1.909-4.903 1.959-2.247 4.172-2.47 2.203-.229 4.496 1.471zm-4.42 1.556q-1.018-.714-1.9-.653t-1.682.98q-.744.853-.746 1.756-.003.902.989 1.746zM70.65 54.006l-3.027 2.59-4.278-4.269q-.522-.521-1.095-.985-.581-.47-.969-.594-.451-.14-.908.008-.448.142-1.025.635-.41.351-.713.839-.296.48-.52 1.17l6.113 6.102-3.01 2.576-8.624-8.608 3.01-2.576.952.95q.226-1.262.655-2.198.437-.944 1.34-1.716 1.522-1.303 3.189-1.22 1.675.075 3.295 1.693zM84.675 38.179l-7.738 4.913q.918 1.091 2.228 1.147 1.32.049 3.01-1.025 1.071-.68 1.814-1.671.743-.992 1.026-1.767l.375-.239 1.844 2.493q-.833 1.15-1.706 1.984-.874.834-2.104 1.615-3.174 2.016-5.834 1.778-2.66-.238-4.453-2.662-1.774-2.398-1.212-4.809.566-2.425 3.355-4.196 2.573-1.634 4.756-1.258 2.176.367 3.835 2.61zm-4.708.315q-.75-.957-1.61-1.133-.862-.175-1.914.492-.976.62-1.26 1.486-.285.865.399 1.94zM98.833 27.731l-.324.154q-.274.036-.811.245-.537.208-.882.372-.78.37-1.326.748-.546.377-1.111.928l3.858 7.005-3.646 1.733-5.762-10.462 3.646-1.733.847 1.538q.682-1.524 1.403-2.255.717-.74 1.467-1.096.192-.092.44-.198t.441-.174zM115.593 26.98l-.89-2.306q-.757.321-1.625.735-.871.403-1.289.699-.513.361-.698.79-.178.416.023.938.133.345.281.54.148.196.48.307.323.114.703.098.377-.026 1.104-.27.578-.194 1.083-.608.515-.418.828-.923zm.66 1.714q-.226.321-.568.78-.342.46-.68.774-.476.427-1.044.74-.565.323-1.292.567-1.712.574-3.244-.014t-2.116-2.105q-.467-1.212-.175-2.178t1.202-1.772q.898-.802 2.41-1.52 1.51-.719 3.178-1.378l-.023-.06q-.353-.916-1.3-.988-.95-.082-2.533.45-.952.319-1.91.996-.964.668-1.37.994l-.353.118-1.03-2.67q.554-.352 1.847-1.009 1.3-.67 2.68-1.133 3.285-1.101 5.1-.653 1.823.434 2.59 2.425l2.903 7.528-3.82 1.28zM132.834 25.621l-3.983.876-3.961-15.87 3.983-.877z" />
        </g>
        <path
          id="arrow"
          d="M149.241 34.3l-18.96 22.787 16.657.052v95.518h3.828V57.152l17.147.053z"
          paintOrder="markers stroke fill"
        />
      </svg>
      <div id="instruction">
        <h1 id="wheelh1Txt">You selected the category: </h1>
        <br></br>
        <h1 id="spanText">--- {catList[degNumIndex]} ---</h1>
        <br />
          <Link to= "/Question">
            <button id="questionButton">Get Question!</button>
          </Link>
        
      </div>
    </div>
  );
}


export default Wheel;