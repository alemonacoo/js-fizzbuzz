console.log("Js OK!");

for (let i = 1; i <= 100; i++) {
    switch(0){
      case (i % 15):
        console.log('FizBuz');
        break;
      case (i%3):
        console.log('Fiz');
        break;
      case (i%5):
        console.log('Buz');
        break;
       default:
        console.log(i);
        break; 
      }

}
