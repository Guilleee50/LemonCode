console.log("************** DELIVERABLE 05 *********************");

class SlotMachine{
    monedas: number = 0;

    play() {
        this.monedas++;
        const randomBoolean = (): boolean => Math.random() < 0.5;
        const numTiradas = 3;
    
        let gano = true;
        for (let i = 0; i < numTiradas; i++) {
            if (!randomBoolean()) {
                gano = false;
                break;
            }
        }
    
        if (gano) {
            console.log(`Congratulations!!! You won ${this.monedas} coins!!`);
            this.monedas = 0;
        } else {
            console.log("Good luck next time!!");
        }
    }
}    

const machine1 = new SlotMachine();       
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();