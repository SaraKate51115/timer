let times = process.argv.slice(2);

for (let time of times) {

  if (time < 0) {

    setTimeout(() => {
      process.stdout.write(`no beep :( for: ${time}   `);
    }, 250);

  } else {

    setTimeout(() => {
      process.stdout.write('\x07');
    }, (time * 1000));
  
  }
}
  

