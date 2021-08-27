
export var erro={

    erro1: /\s\d+[a-z]+\d*/igm,//identifier iniciado por digito
    erro2: /\-\-+\d*[a-z]*|\_\_+[a-z]*\d*|\@+\d+[a-z]*/img,//identifiers com simbolos na frente
    erro3: /\sbeg*i*\s|benig\s/img,//corrector de begin
    erro4: /end\s{2}|en;|ens;/img,//coloca ; depois do end
    erro5: /program\d+[a-z]+|program[~`!@#$%^&*()=+-_]+/img,
    erro6: /\s([~`!@#$%^&*(){}_][a-z]+)+/img,
    erro7: /[a-z]+\d+[a-z]+/img
}




