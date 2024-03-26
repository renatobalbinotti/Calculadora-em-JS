function criaCalculadora () {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.pressionaTeclado();
        },

        pressionaTeclado() {
            document.addEventListener('keypress', e => {
                
                if (e.key === '+' || 
                    e.key === '-' || 
                    e.key === '*' || 
                    e.key === '/' || 
                    e.key === '(' || 
                    e.key === ')') {
                    this.display.value += e.key;
                }

                if (e.key >= 0 && e.key <= 9) this.display.value += String(e.key)
                if (e.keyCode === 13) this.realizaConta();
            });

            document.addEventListener('keydown', e => { 
                if (e.key === 'Delete') this.ApagaUm();
                if (e.keyCode === 8) this.clearDisplay() 
            });
            
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);
                if (el.classList.contains('btn-clear')) this.clearDisplay();
                if (el.classList.contains('btn-del')) this.ApagaUm();
                if (el.classList.contains('btn-eq')) this.realizaConta();

                this.display.focus();
            });
        },

        btnParaDisplay(valor) {this.display.value += valor; },

        clearDisplay() { this.display.value = ''; },

        ApagaUm() { this.display.value = this.display.value.slice(0, -1); },

        realizaConta() {
            try {
                let conta = eval(this.display.value);

                if (!conta) {
                    alert('Conta inválida!');
                    return;
                }

                this.display.value = String(conta);
            } catch (err) {
                alert(`Conta inválida! ${err}`);
                return;
            }
        }
    };
};

const calculadora = criaCalculadora().inicia();