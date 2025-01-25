function highlight (selected){
    $(selected).animate({ width: '50px',
                            height: '50px'
                            }, 250);
};

function deHighlight (selected) {
    $(selected).animate({ width: '40px',
        height: '40px'
      }, 250);
};