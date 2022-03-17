/**
 * app.js
 * Extra Credit jQuery Event Delegation
 * Click to add New Account
 */

'use strict'

$(function(){
    const $aList = $('#articlesList');
    $('a', $aList).attr('href','');
    $aList.on("click", "a", function( event ) {
        event.preventDefault();        
        $aList.append(`<article>
        <p>Here is an Account - 
            <a href="http://www.google.com">Click to Add a new Account</a>
        </p>
    </article>`);
    });
})