class LevelButton{

    constructor(x, y){
      this.message=createElement("h2");
      
    }

    display(){
     
       
        
        //creating level1 Button
        this.level1Button = createButton("level1");
        this.level1Button.position(displayWidth/2-130, displayHeight/2+20);

        if(gameState === 0 && score<2){
            this.level1Button.mousePressed(()=>{
                this.level1Button.hide();
                this.level2Button.hide();
                this.level3Button.hide();
                level.display(1);
                gameState++;
            });
        }

       
            
         //creating level2 Button   
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
        this.level2Button = createButton("level2");
        this.level2Button.position(displayWidth/2-20, displayHeight/2+20);

        
        if(gameState === 1){
            this.level2Button.mousePressed(()=>{
                if(score >= 1){
                    level.display(2);
                    this.level1Button.hide();
                    this.level2Button.hide();
                    this.level3Button.hide();
                    gameState++;
                }

            });
        }    
            


        //creating level3 Button        
        this.level3Button = createButton("level3");
        this.level3Button.position(displayWidth/2+80, displayHeight/2+20);

        this.level3Button.mousePressed(()=>{
            if(gameState === 2 ){
                if(score >= 4){
                    level.display(3);
                    this.level1Button.hide();
                    this.level2Button.hide();
                    this.level3Button.hide();
                    gameState++;
                }
            }
        });
     


    }

} 
