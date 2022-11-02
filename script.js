const numbersContainer = document.querySelector('.numbers');
const operator = document.querySelector('.operators')
const number = document.querySelector('.result');
const upperText = document.querySelector('.szare');
const res = document.querySelector('.wynik');
const clearBtn = document.querySelector('.cls');

class Calculator{
    wynik;
    wynikGora;
    kindOfOperator;
    constructor(){
        numbersContainer.addEventListener('click', this.clicked.bind(this));
        operator.addEventListener('click', this.operator.bind(this));
        res.addEventListener('click', this.result.bind(this));
        clearBtn.addEventListener('click', this.clear)
        
    }
    clicked(e){
        const clicked = e.target.closest('.num');
        if(!clicked)return;
        number.textContent += clicked.textContent;
        this.wynik = number.textContent;
    }
    operator(a){
        const clicked = a.target.closest('.op');
        if(!clicked)return;
        this.kindOfOperator = a.target.closest('.op').textContent;

        upperText.textContent = this.wynik + this.kindOfOperator;
        this.wynikGora = this.wynik;
        number.textContent = ''; 

    }
    result(){
        if(this.kindOfOperator === '+'){
            upperText.textContent = ''
            number.textContent = +this.wynikGora + +number.textContent;
        }
        if(this.kindOfOperator === '*'){
            upperText.textContent = ''
            number.textContent = +this.wynikGora * +number.textContent;
        }
        if(this.kindOfOperator === '/'){
            upperText.textContent = ''
            number.textContent = Math.floor(+this.wynikGora / +number.textContent);
        }
        if(this.kindOfOperator === '-'){
            upperText.textContent = ''
            number.textContent = +this.wynikGora - +number.textContent;
        }
        this.wynik = number.textContent;
    }
    clear(){
        number.textContent = '';
        upperText.textContent = '';
    }

    

}

const app = new Calculator();