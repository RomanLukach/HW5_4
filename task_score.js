// Домашнее задание 5.4
// В выводе текста в предыдущем задании сократите имя студента до первой буквы, применив метод slice() к переменной с полным именем в команде вывода текста в консоль.
// Закомитьте ваши изменения. Приложите в ответ на это задание ссылку на коммит в вашем удаленном репозитории.

// Домашнее задание 5.3  (30 баллов)

// Создать файл для JS скрипта с названием - task_score.js.
// Составьте расчет среднего балла за домашние задания студента по модулям:
// - введение
// - git
// - js
// Для расчета создайте переменные, которые будут хранить баллы по каждому модулю, переменную, которая будет рассчитывать среднее значение по всем модулям.
// Выведите итог в консоль с соответствующим текстом.
// Добавьте переменную с полным именем и фамилией студента и также добавьте ее в вывод количества баллов в консоли. Обязательно используйте шаблоны строк.

// Закомитьте ваши изменения. Приложите в ответ на это задание ссылку на коммит в вашем удаленном репозитории//

// --------------------------------------------------------------------------

// Данные студента
let student = {};
student.name = "Bill";
student.lastName = "Gates";

// Introduction homeworks

let hw11Score = 20;
let hw12Score = 20;
let hw13Score = 30;
let hw14Score = 30;
let hw1tasks = 4;
hw1TotalScore = hw11Score + hw12Score + hw13Score + hw14Score;

// Intorduction Average score
scoreIntroAverage = hw1TotalScore / hw1tasks;

// GIT homeworks
let hw21Score = 15;
let hw22Score = 15;
let hw23Score = 30;
let hw24Score = 20;
let hw2tasks = 4;
hw2TotalScore = hw21Score + hw22Score + hw23Score + hw24Score;

let hw31Score = 10;
let hw32Score = 10;
let hw33Score = 20;
let hw34Score = 50;
let hw35Score = 7;
let hw3tasks = 5;
hw3TotalScore = hw31Score + hw32Score + hw33Score + hw34Score + hw35Score;

let hw41Score = 10;
let hw42Score = 10;
let hw43Score = 20;
let hw44Score = 50;
let hw4tasks = 4;
hw4TotalScore = hw41Score + hw42Score + hw43Score + hw44Score;

// Git Average
scoreGitAverage =
  (hw2TotalScore + hw3TotalScore + hw4TotalScore) /
  (hw2tasks + hw3tasks + hw4tasks);

// JavaScript
let hw51Score = 10;
let hw52Score = 30;
let hw53Score = 30;
let hw54Score = 25;
let hw55Score = 25;
let hw5tasks = 5;
hw5TotalScore = hw51Score + hw52Score + hw53Score + hw54Score + hw55Score;

// JS Everage
scoreJsAverage = hw5TotalScore / hw5tasks;

// Average by all modules
scoreAverage = (scoreIntroAverage + scoreGitAverage + scoreJsAverage) / 3;

// Average by all modules including Additional scores by Module 1
// Additional scores by Module 1
m1AdditionalScores = 50;
m1AdditionalTasks = 1;

// Average by all modules including additional tasks
scoreAverageAdd =
  (hw1TotalScore +
    hw2TotalScore +
    hw3TotalScore +
    hw4TotalScore +
    hw5TotalScore +
    m1AdditionalScores) /
  (hw1tasks + hw2tasks + hw3tasks + hw4tasks + hw5tasks + m1AdditionalTasks);

// Print all results to console
console.log(
  `Cредний балл за домашние задания студента ${student.name.slice(0,1)}. ${student.lastName}:`
);
console.log(`- введение: ${scoreIntroAverage.toFixed(2)}`);
console.log(`- git: ${scoreGitAverage.toFixed(2)}`);
console.log(`- js: ${scoreJsAverage.toFixed(2)}`);
console.log(`Средний балл по всем модулям: ${scoreAverage.toFixed(2)}`);
console.log(
  `Средний балл по всем модулям включая дополнительное задание по модулю 1: ${scoreAverageAdd.toFixed(
    2
  )}`
);
