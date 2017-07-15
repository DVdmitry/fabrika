import { Price } from './price';

export const PRICEDATA: Price[] = [
    new Price("Стоимость", "Стоимость курсовой работы составляет 75-85р. в зависимости от дисциплины. Стоимость дипломной работы фиксирована и составляет 350 р.", "https://s3.amazonaws.com/fabrika-kurs/price+payment/price.jpg"),
    new Price("Форма оплаты", "Оплату можно производить наличными либо с помощью банковской платежной карточки.", "https://s3.amazonaws.com/fabrika-kurs/price+payment/payment.jpg"),
    new Price("Условия оплаты по курсовой", "При получении курсовой работы Вы оплачиваете только 70% стоимости, остальные 30% - ПОСЛЕ ЗАЩИТЫ.", "https://s3.amazonaws.com/fabrika-kurs/price+payment/delay+term.jpg"),
    new Price("Условия оплаты по диплому", "При заказе диплома и после утверждения плана руководителем необходима предоплата в размере 40%, еще 40% Вы оплачиваете в момент получения работы. Оставшиеся 20% Вы оплачиваете ПОСЛЕ ПЕРВОЙ ПРОВЕРКИ работы руководителем", "https://s3.amazonaws.com/fabrika-kurs/price+payment/delay+diplom.jpg")
]
