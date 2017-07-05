var $datePicker = $('[data-calendar]')[0];

var dataLocale = $('[data-calendar]').data('pikaday-locale');

var langs = {
 previousMonth: 'Mês Anterior',
 nextMonth: 'Mês Seguinte',
 months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
 weekdays: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
 weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
};

var picker = new Pikaday({
 field: $datePicker,
 format: 'DD/MM/YYYY',
 i18n: langs
})