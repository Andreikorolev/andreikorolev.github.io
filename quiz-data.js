const quizData = [
  {
    typeOfInput: "radio",
    cardLabel: "Как вы оцениваете степень технологической готовности Вашего проекта?",
    questions: [
      {
        label: "Нет образца",
        value: 0,
        responsibility: "Поможем получить первый образец",
        weTake: true,
      },
      {
        label: "Макетный образец",
        value: 1,
        responsibility:
          "Поможем довести образец до более высокой степени готовности",
        weTake: true,
      },
      {
        label: "Лабораторный образец",
        value: 2,
        responsibility:
          "Поможем довести образец до более высокой степени готовности",
        weTake: true,
      },
      {
        label: "Полнофункциональный прототип",
        value: 3,
        responsibility: "Подготовка серийного образца",
      },
      {
        label: "Готовый серийный образец",
        value: 4,
        responsibility: "Расширение рынка сбыта"
      },
    ],
  },
  {
    typeOfInput: "radio",
    cardLabel: "Есть ли у вас команда разработчиков для реализации проекта?",
    questions: [
      {
        label: "Нет. Есть идея, но её некому реализовать",
        value: 0,
        responsibility: "Помощь в поиске команды разработки",
      },
      {
        label: "Есть основная команда, но нужна помощь в расширении",
        value: 1,
        responsibility: "Помощь в расширении команды разработки",
        weTake: true,
      },
      {
        label: "Есть команда",
        value: 2,
        responsibility: "",
      },
    ],
  },
  {
    typeOfInput: "radio",
    cardLabel: "Есть ли у вас кому делать проектную документацию?",
    questions: [
      {
        label: "Нет",
        value: 0,
        responsibility: "Помощь с конструкторской документацией",
      },
      {
        label: "Да, мы сами это делаем",
        value: 1,
        responsibility: "Выпуск конструкторской документации",
      },
    ],
  },
  {
    typeOfInput: "radio",
    cardLabel: "Есть ли у вас бизнес-план для вашего стартапа?",
    questions: [
      {
        label: "Нет",
        value: 0,
        responsibility: "Помощь с созданием бизнес-плана",
      },
      {
        label: "Есть, но нужна помощь с проверкой и доработкой",
        value: 1,
        responsibility: "Валидация бизнес-модели стартапа",
        weTake: true,
      },
      {
        label: "Да, все готово",
        value: 2,
        responsibility: "",
      },
    ],
  },
  {
    typeOfInput: "radio",
    cardLabel: "Есть ли сейчас у вас хотя бы один покупатель?",
    questions: [
      {
        label: "Да",
        value: 2,
        responsibility: "Увеличить количество продаж"
      },
      {
        label: "Нет, но есть контакты с заинтересованными лицами",
        value: 1,
        responsibility: "Поможем найти потенциального покупателя",
        weTake: true,
      },
      {
        label: "Нет",
        value: 0,
        responsibility: "Поможем найти потенциального покупателя",
        weTake: true,
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
        weTake: true,
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
  {
    typeOfInput: "radio",
    cardLabel: "Разработана ли у Вас модель управления рисками проекта?",
    questions: [
      {
        label: "Нет",
        value: 0,
        responsibility: "Поможем разработать модель управления рисками проекта",
      },
      {
        label: "Да",
        value: 1,
        responsibility: "Модель управления рисками проекта",
      },
    ],
  },
  {
    typeOfInput: "radio",
    cardLabel: "Есть ли у Вас понимания где и как производить продукт?",
    questions: [
      {
        label: "Нет",
        value: 0,
        responsibility:
          "Поможем с производственными площадками и технологическими процессами",
      },
      {
        label:
          "Есть разработанный технологический процесс, но нет производственной площадки",
        value: 1,
        responsibility: "Проработка производственных площадок",
        weTake: true,
      },
      {
        label:
          "Есть разработанный технологический процесс и определенны производственные площадки",
        value: 2,
        responsibility: "Заключение соглашение с производственными площадками",
      },
    ],
  },
  {
    typeOfInput: "radio",
    cardLabel: "Есть ли у Вас понимания каналов сбыта продукта?",
    questions: [
      {
        label: "Нет",
        value: 0,
        responsibility: "Поможем определить каналы сбыта продукт",
      },
      {
        label: "Мы знаем каналы сбыта нашего продукта",
        value: 1,
        responsibility: "Проработка основных и альтернативных каналов сбыта",
      },
    ],
  },
];
