(()=>{ // main module
    const Tiles={
        first:'',
        second:'',
        third:'',
        fourth:'',
        fifth:'',
        sixth:'',
        seventh:'',
        eigth:'',
        ninth:'',
    };
    let isPlayable=true;
    const fieldButtons=document.querySelectorAll('.window');
    fieldButtons.forEach(element=>{
        element.addEventListener('click',function(){
            if(isPlayable==true){
                if(!element.innerText){
                    element.innerText+='X';
                    Object.keys(Tiles).forEach(tilesElement=>{
                        if(element.id==tilesElement)Tiles[tilesElement]='player'; // check for clicked buttons id. when it matches with one of the keys on Tiles object, set the value of that key to false(meaning, that tile is used now and wont be able to be clikced)
                    })
                    isPlayable=CheckWinners(Tiles,isPlayable);
                    isPlayable=ComputerTurn(isPlayable,Tiles);

                    console.log(isPlayable);
                }
            }
        });
    });
    document.querySelector('.play-again').addEventListener('click',function(){
        console.log('playagain');
        fieldButtons.forEach(element=>{
            element.innerText='';
        });
        isPlayable=true;
        Object.entries(Tiles).forEach(element=>{
            element[1]='';
        });
    }
    );


    function ComputerTurn(isPlayable,Tiles){ // computer players logic
        if(isPlayable==true){
            TilesArray=Object.entries(Tiles); // turn the object 'Tiles' into an array
            const availableTiles=TilesArray.filter(tile=>tile[1]==''); // Check each index of TilesArray and filter out the ones that have the value blank(the ones that haven't been clicked or selected by the computer or player)
            const chosenTile=Math.floor((Math.random()*availableTiles.length)+1); // choose one tile out of the availableTiles
            console.log(Tiles);
            let temp='';
            availableTiles.forEach((element,index)=>{ // go through availableTiles array
                if(chosenTile-1==index){ // find which index equals to chosenTile(-1, because chosenTile can be from 1 to 9)
                    temp=availableTiles[index][0]; // turn the chosenTile integer(1-9) to a string(first-ninth)
                }
            });
            TilesArray.forEach(element => { // go through 'Tiles' object(turned into an array)
                if(temp==element[0]){ // find which elements first value in tiles array(Tiles object key) equals to 'temp' string
                    document.querySelector(`#${temp}`).innerText='O'; // update the button with the id of that objects key
                    Tiles[temp]='computer'; // turn that objects key to 'computer'
                }
            });
            return isPlayable=CheckWinners(Tiles,isPlayable);
        }
        else{
            return isPlayable=false;
        }
    }
})();

function CheckWinners(Tiles,playable){ // check for winners
    if( (Tiles.first=='player'&&Tiles.second=='player'&&Tiles.third=='player')||(Tiles.fourth=='player'&&Tiles.fifth=='player'&&Tiles.sixth=='player')||(Tiles.seventh=='player'&&Tiles.eigth=='player'&&Tiles.ninth=='player')||(Tiles.first=='player'&&Tiles.fourth=='player'&&Tiles.seventh=='player')||(Tiles.second=='player'&&Tiles.fifth=='player'&&Tiles.eigth=='player')||(Tiles.third=='player'&&Tiles.sixth=='player'&&Tiles.ninth=='player')||(Tiles.first=='player'&&Tiles.fifth=='player'&&Tiles.ninth=='player')||(Tiles.third=='player'&&Tiles.fifth=='player'&&Tiles.ninth=='player') ){
        console.log('player won');
        ScoreUpdate(`YOU`);
        playable=false;
        return playable;
    }
    else if( (Tiles.first=='computer'&&Tiles.second=='computer'&&Tiles.third=='computer')||(Tiles.fourth=='computer'&&Tiles.fifth=='computer'&&Tiles.sixth=='computer')||(Tiles.seventh=='computer'&&Tiles.eigth=='computer'&&Tiles.ninth=='computer')||(Tiles.first=='computer'&&Tiles.fourth=='computer'&&Tiles.seventh=='computer')||(Tiles.second=='computer'&&Tiles.fifth=='computer'&&Tiles.eigth=='computer')||(Tiles.third=='computer'&&Tiles.sixth=='computer'&&Tiles.ninth=='computer')||(Tiles.first=='computer'&&Tiles.fifth=='computer'&&Tiles.ninth=='computer')||(Tiles.third=='computer'&&Tiles.fifth=='computer'&&Tiles.ninth=='computer') ){
        console.log('Computer won');
        ScoreUpdate(`PC`);
        playable=false;
        return playable;
    }else{
    playable=true;
    return playable;
    }

}

function ScoreUpdate(whoToUpdate){
    document.querySelector(`#${whoToUpdate}`).innerText=(parseInt(document.querySelector(`#${whoToUpdate}`).innerText)+1);

}

