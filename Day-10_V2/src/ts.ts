class FloatingLabelForm {
    private inputs: NodeListOf<HTMLInputElement>  = document.querySelectorAll<HTMLInputElement>(".form-input");;
  
    constructor() {
      
      this.initialize();
    }
  
    private initialize(): void {
      this.inputs.forEach((input) => {
        const label = input.previousElementSibling as HTMLLabelElement;
  
        input.addEventListener("focus", () => {
            label.classList.add("active");
        });
  
        input.addEventListener("blur", () => {
            if (input.value.trim() === "") {
                label.classList.remove("active");
            }
        });
  
      });
    }
  }
  new FloatingLabelForm();
  