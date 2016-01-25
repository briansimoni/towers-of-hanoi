/**
 * Created by brian on 1/24/16.
 */

$(document).ready(function(){

    var moveCount = 0;
    // add and remove the selected class on click
    $('.disk').click(function(){
        $('.disk').removeClass('selected');
       $(this).addClass('selected');
    });


    $('.tower').click(function(){
        var clickedTower = $(this);

        var fromTower = {};
        if ( $('.selected').length == true){
            var hasSelected = $('.tower').has('.selected');
            var id = hasSelected[0].id;
            fromTower = $('#' + id);
        }

        if ( ( clickedTower.has('.selected').length == false ) && ($('.selected').length == true) ){
            moveDisk($('.selected'), fromTower, clickedTower);
        }
    });

    // moves the selected disk to the tower clicked by the user
    function moveDisk(disk, fromTower, toTower){

        var diskNumber = disk.text();

        //todo: figure out why I can't use jQuery's first() method
        // the next three lines get the disk number of the top disk on the clicked tower
        var toTowerId = '#' + $(toTower).attr('id');
        var toTowerChildren = $(toTowerId).children();
        var toTowerDiskNumber = $(toTowerChildren[0]).text();

        // the next three lines get the disk number of the top disk on the from tower
        var fromTowerId = '#' + $(fromTower).attr('id');
        var fromTowerChildren = $(fromTowerId).children();
        var fromTowerDiskNumber = $(fromTowerChildren[0]).text();

        if(diskNumber < toTowerDiskNumber || diskNumber < fromTowerDiskNumber){
            alert('illegal move');
        } else{
            $(toTower).prepend(disk);
            moveCount++;
            console.log('Move Count ' + moveCount);
        }


    }

});



function resetGame(numDisks){

}



















