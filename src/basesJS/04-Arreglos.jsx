function Arreglos(){

    let arreglo1 = [];
    console.log("Arreglo 1: " + arreglo1);
    const arreglo2 = [1,2,3,4];

    arreglo1.push(1);
    arreglo1.push(2);
    arreglo1.push(3);

    console.log("Arreglo 1: " + arreglo1);
    console.log("Arreglo 2: " + arreglo2);

    let arreglo3 = [...arreglo2, 5];
    //arreglo2.push(5);
    console.log("Arreglo 3: " + arreglo3);
    console.log("Arreglo 2[1]: " + arreglo2[1]);
    console.log("Arreglo 2[2]: " + arreglo2[2]);
    console.log("Arreglo 2[0]: " + arreglo2[0]);


    const arreglo4 = arreglo3.map(function(numero){
        return numero * 2;
    });

    console.log("Arreglo 4: " + arreglo4);
}

export default Arreglos;