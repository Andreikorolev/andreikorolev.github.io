const quizData = [
  {
    typeOfInput: "radio",
    cardLabel: "На какой стадии технологическая готовность?",
    questions: [
      {
        label: "Нет образца",
        value: 0,
        responsibility: "Поможем получить первый образец",
      },
      {
        label: "Макетный образец",
        value: 1,
        responsibility:
          "Поможем довести образец до более высокой степени готовности",
      },
      {
        label: "Лаборатоный образец",
        value: 2,
        responsibility:
          "Поможем довести образец до более высокой степени готовности",
      },
      {
        label: "Полнофункционнальный прототип",
        value: 4,
        responsibility: "Подготовка серийного образца",
      },
      {label: "Готовый серийный образец", value: 4, responsibility: ""},
    ],
  },
  {
    typeOfInput: "radio",
    cardLabel: "Есть ли у вас кому делать конструкторскую документацию?",
    questions: [
      {
        label: "Да, мы сами это делаем",
        value: 1,
        responsibility: "Выпуск конструкторской документации",
      },
      {
        label: "Нет",
        value: 0,
        responsibility: "Помощь с конструкторской документацией",
      },
    ],
  },
  {
    typeOfInput: "radio",
    cardLabel: "Производили ли вы испытания у заказчиков?",
    questions: [
      {
        label: "Нет",
        value: 0,
        responsibility:
          "Поможем с проведением испытаний у потенциальных заказчиков",
      },
      {
        label: "Нет, но есть потенциальные договоренности",
        value: 1,
        responsibility:
          "Поможем с проведением испытаний у потенциальных заказчиков",
      },
      {
        label: "Нет, но есть гарантированная договоренность",
        value: 2,
        responsibility: "Проведение испытаний у заказчика",
      },
      {
        label: "Да, проводили испытания",
        value: 3,
        responsibility: "",
      },
    ],
  },
  //КЛИЕНТЫ
  {
    typeOfInput: "radio",
    cardLabel: "Есть ли сейчас у вас хотя бы один покупатель?",
    questions: [
      {label: "Да", value: 1, responsibility: "Увеличить количество продаж"},
      {
        label: "Нет",
        value: 0,
        responsibility: "Найдем потенциального покупателя",
      },
    ],
  },
];
