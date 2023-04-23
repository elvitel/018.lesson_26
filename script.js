window.onload = function() {
    
    let categories = ['Category 1', 'Category 2', 'Category 3'];

    let products = [
        ['Product 1.1', 'Product 1.2'],
        ['Product 2.1', 'Product 2.2', 'Product 2.3'],
        ['Product 3.1', 'Product 3.2']                                    
    ];

    let infoBlocks = [
        ['Information 1.1', 'Information 1.2'],
        ['Information 2.1', 'Information 2.2', 'Information 2.3'],
        ['Information 3.1', 'Information 3.2']                               
    ];

    const divParent = document.getElementById('parent');
    divParent.setAttribute('style', 'display: flex; justify-content: space-between; width: 1350px');

    const divCategories = document.createElement('div');
    divParent.appendChild(divCategories);
    divCategories.setAttribute('style', 'display: flex; flex-direction: column');

    const divProducts = document.createElement('div');
    divParent.appendChild(divProducts);
    divProducts.setAttribute('style', 'display: flex; flex-direction: column; visibility: hidden');         
    
    const divInfoBlocks = document.createElement('div');
    divParent.appendChild(divInfoBlocks);
    divInfoBlocks.setAttribute('style', 'visibility: hidden');

    for (let i = 0; i < categories.length; i++) {
        const divCategory = document.createElement('a');
        divCategory.setAttribute('style', 'cursor: pointer; margin-bottom: 20px');
        divCategories.appendChild(divCategory);
        divCategory.innerHTML = categories[i];
        divCategory.classList.add(`cat${i + 1}`);        
        
        for (let j = 0; j < products[i].length; j++) {  
            const divProduct = document.createElement('a');            
            divProducts.appendChild(divProduct);
            divProduct.innerHTML = products[i][j];
            divProduct.classList.add(`cat${i + 1}`, `cat${i + 1}_${j + 1}`);              
            
            const divInfoBlock = document.createElement('div');
            divInfoBlocks.appendChild(divInfoBlock);
            divInfoBlock.classList.add(`cat${i + 1}_${j + 1}`);

            const myInfo = document.createElement('p');
            divInfoBlock.appendChild(myInfo);
            myInfo.innerHTML = infoBlocks[i][j];            

            const myButton = document.createElement('button');
            divInfoBlock.appendChild(myButton);
            myButton.textContent = 'Buy';
            myButton.setAttribute('style', 'cursor: pointer');

            const myNote = document.createElement('p');
            divInfoBlock.appendChild(myNote);
            myNote.textContent = 'This product has been bought';
            myNote.setAttribute('style', 'visibility: hidden');
        }        
    }  
    
    divCategories.addEventListener('click', (event) => {        
        let targetElement = event.target;
        let myClassName = targetElement.className;
        if (targetElement.tagName !== 'A') {                                    
            return;             
        } else {   
            divProducts.setAttribute('style', 'display: block');        
            for (let i = 0; i < divProducts.children.length; i++) {
                if (divProducts.children[i].classList.contains(myClassName)) {  
                    divProducts.children[i].setAttribute('style', 'display: block; cursor: pointer; margin-bottom: 20px');
                } else {
                    divProducts.children[i].setAttribute('style', 'display: none');
                }
            }  
            for (let i = 0; i < divInfoBlocks.children.length; i++) {
                divInfoBlocks.children[i].setAttribute('style', 'visibility: hidden');                
            }  
        }                                         
    });    
    
    divProducts.addEventListener('click', (event) => {      
        let targetElement = event.target;        
        if (targetElement.tagName !== 'A') {                                    
            return;             
        } else {  
            divInfoBlocks.setAttribute('style', 'display: block');           
            for (let i = 0; i < divInfoBlocks.children.length; i++) {
                let myClassName = divInfoBlocks.children[i].className;
                if (targetElement.classList.contains(myClassName)) {
                    divInfoBlocks.children[i].setAttribute('style', 'display: block');
                } else {
                    divInfoBlocks.children[i].setAttribute('style', 'display: none');
                }
            }                      
        }                                   
    });     

    divInfoBlocks.addEventListener('click', (event) => {
        let targetElement = event.target;
        if (targetElement.tagName !== 'BUTTON') {
            return;
        } else {
            targetElement.nextSibling.setAttribute('style', 'visibility: visible');

            setTimeout(function() {
                divProducts.setAttribute('style', 'display: flex; flex-direction: column; visibility: hidden');
                divInfoBlocks.setAttribute('style', 'visibility: hidden');
                targetElement.nextSibling.setAttribute('style', 'visibility: hidden');
            }, 3000);
        }        
    });     

};





