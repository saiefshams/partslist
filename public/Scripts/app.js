const { Button } = require("bootstrap");

(function(){
    function Start()
    {
        console.log("App Started");
        let deleteButtons = document.querySelectorAll('.btn-danger');
    for(Button of deleteButtons)
    {
        Button.addEventListener('click', (event) => {
            if(!confirm("Are you sure?"))
            {
                event.preventDefault();
                window.location.assign('/partslist');
            }
        });
    }
    }
    window.addEventListener("load", Start);

})();