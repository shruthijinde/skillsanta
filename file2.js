var library = [
    {
        title:'Bill Gates',
        author:'The Road Ahead',
        raedingStatus:true
    },
    {
        title:'Stave Jobs',
        author:'Walter Isaacson',
        readingStatus:true
    },
    {
        title:'Mockingjay: The final book of the hunger games',
        author:'Suzanne Collins',
        readingStatus:false
    }];
for(var i = 0 ;i < library.length; i++)    
{
    var book="'" + library[i].title + "'" + 'by' + library[i].author +".";
    if(library[i].readingStatus){
        document.write("already read" + book +"<br>");
    }else
    {
        document.write("you still need to read" + book +"<br>");
    }
}