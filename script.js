(()=>{
    const Tiles={
        first: true,
        second: true,
        third: true,
        fourth: true,
        fifth: true,
        sixth: true,
        seventh: true,
        eigth: true,
        ninth: true,
    };
    const fieldButtons=document.querySelectorAll('.window');
    fieldButtons.forEach(element=>{
        element.addEventListener('click',function(){
            if(!element.innerText){
                element.innerText+='X';
                Object.keys(Tiles).forEach(tilesElement=>{
                    if(element.id==tilesElement)Tiles[tilesElement]=false; // check for clicked buttons id. when it matches with one of the keys on Tiles object, set the value of that key to false(meaning, that tile is used now and wont be able to be clikced)
                })
                ComputerTurn();
            }
        });
    });

    function ComputerTurn(){ // computer players logic
        TilesArray=Object.entries(Tiles); // turn the object 'Tiles' into an array
        const availableTiles=TilesArray.filter(tile=>tile[1]==true); // Check each index of TilesArray and filter out the ones that have the value 'true'(the ones that haven't been clicked or selected by the computer)
        const chosenTile=Math.floor((Math.random()*availableTiles.length)+1); // choose one tile out of the availableTiles
        let temp='';
        availableTiles.forEach((element,index)=>{ // go through availableTiles array
            if(chosenTile-1==index){ // find which index equals to chosenTile(-1, because chosenTile can be from 1 to 9)
                temp=availableTiles[index][0]; // turn the chosenTile integer(1-9) to a string(first-ninth)
            }
        });
        TilesArray.forEach(element => { // go through 'Tiles' object(turned into an array)
            if(temp==element[0]){ // find which elements first value in tiles array(Tiles object key) equals to 'temp' string
                document.querySelector(`#${temp}`).innerText='O'; // update the button with the id of that objects key
                Tiles[temp]=false; // turn that objects key to false
            }
        });
    }
})();