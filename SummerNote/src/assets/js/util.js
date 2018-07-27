function initSummerNote(idElement,initialValue){
  $(idElement).summernote({
    lang: 'es-ES' ,
    placeholder: 'Inserte el texto aquí...'
  });
  $(idElement).summernote('code',initialValue);
}

function getSummerNoteContent(idElement){
   return $(idElement).summernote('code');
}
