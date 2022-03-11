/**
 * app.js
 * Extra Credit jQuery Event Delegation
 * Click to add New Article
 */

'use strict'

$(function(){
    const $aList = $('#articlesList');
    $('a', $aList).attr('href','');
    $aList.on("click", "a", function( event ) {
        event.preventDefault();        
        $aList.append(`<article>
        <p>Article Title - 
            <a href="http://www.google.com">Click to Add a new Article</a>
        </p>
    </article>`);
    });
})