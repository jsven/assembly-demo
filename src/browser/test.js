(async () => {
  const importObject = {
    env: {
      abort(_msg, _file, line, column) {
        console.error("abort called at index.ts:" + line + ":" + column);
      }
    }
  };
  const module = await WebAssembly.instantiateStreaming(
    fetch("../../build/optimized.wasm"),
    importObject
  );
  const add = module.instance.exports.add;

  const result = document.querySelector("#result");
  document.querySelector("#prime-checker").addEventListener("click", event => {
    event.preventDefault();
    result.innerText = "";
    const number = 1;
    console.log(`${number} is ${add(number, 5)} ? '' : 'not '}prime.`);
    result.value = `123`;
  });
})();
