/*1. Oydagi kunlar sonini olish uchun JavaScript funksiyasini yozing.
input => 6, 2023 output => 30
input => 7, 2023 output => 31
input => 1, 2012 output => 31 */



function getDaysInMonth(month, year) {
    if (month === 2) {
      // Fevral oy uchun to'g'ri kunlar sonini topish
      if (isLeapYear(year)) {
        return 29;
      } else {
        return 28;
      }
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
      // 30 kunlik oy uchun kunlar soni
      return 30;
    } else {
      // 31 kunlik oy uchun kunlar soni
      return 31;
    }
  }
  
  function isLeapYear(year) {
    // Kabisa yilni aniqlash
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  
  console.log(getDaysInMonth(6, 2023)); // 30


  /*2. Sanalarni solishtirish uchun JavaScript funksiyasini yozing (ya'ni, kattaroq, kichik yoki teng).

input => '11/14/2013 00:00', '11/14/2013 00:00', output => "Date1 = Date2"
input => '11/14/2013 00:01, '11/14/2013 00:00', output => "Date1 > Date2"
input => '11/14/2013 00:00', '11/14/2013 00:01', output => "Date2 > Date1" */


  function vaqtniTaqqosla(date1, date2) {
    let d1 = new Date(date1);
    let d2 = new Date(date2);
  
    if (d1.getTime() === d2.getTime()) {
      return "Date1 = Date2";
    } else if (d1.getTime() > d2.getTime()) {
      return "Date1 > Date2";
    } else {
      return "Date1 < Date2";
    }
  }
  
  console.log(vaqtniTaqqosla('11/14/2013 00:00', '11/14/2013 00:00')); // Date1 = Date2
  
  /* 3. Sana dam olish kuni ekanligini tekshirish uchun JavaScript funksiyasini yozing.

Eslatma: Dam olish kunlarining standart shanba/yakshanba taʼrifidan foydalaning.
Input: 
console.log(isWeekend('Nov 15, 2014'));
console.log(isWeekend('Nov 16, 2014'));
console.log(isWeekend('Nov 17, 2014'));
Output:
"weekend"
"weekend"
undefined*/

  function isWeekend(dateString) {
    let date = new Date(dateString);
    let day = date.getDay();
  
    if (day === 0 || day === 6) {
      return "weekend";
    } else {
      return "weekday";
    }
  }
  
  console.log(isWeekend('Nov 15, 2014')); // weekend



  /* 4. Ikki sana orasidagi farqni kunlarda olish uchun JavaScript funksiyasini yozing.

input:
console.log(dateDiffInDays('04/02/2014', '11/04/2014'));
console.log(dateDiffInDays('12/02/2014', '11/04/2014'));
output:
216
-28*/

  function vaqtOrasidagiFarq(startDate, endDate) {
    let start = new Date(startDate);
    let end = new Date(endDate);
  
    let timeDiff = end.getTime() - start.getTime();
    let diffDays = Math.floor(timeDiff / (24 * 60 * 60 * 1000));
  
    return diffDays;
  }
  
  console.log(vaqtOrasidagiFarq('04/02/2014', '11/04/2014')); // 216
  console.log(vaqtOrasidagiFarq('12/02/2014', '11/04/2014')); // -28
  
  
  /* 5. Sanalar arrayidan maksimal sanani olish uchun JavaScript funksiyasini yozing.

Input: 
console.log(maksimal_date(['2015/02/01', '2015/02/02', '2015/01/03']));
Output:
"02.02.2015"*/

  function maksimal_date(dates) {
    let maxDate = null;
  
    for (let i = 0; i < dates.length; i++) {
      let currentDate = new Date(dates[i]);
  
      if (maxDate === null || currentDate > maxDate) {
        maxDate = currentDate;
      }
    }
  
    let day = String(maxDate.getDate()).padStart(2, '0');
    let month = String(maxDate.getMonth() + 1).padStart(2, '0');
    let year = maxDate.getFullYear();
  
    return day + '.' + month + '.' + year;
  }
  
  console.log(maksimal_date(['2015/02/01', '2015/02/02', '2015/01/03'])); // "02.02.2015"
  
  /*6. Yoshni hisoblash uchun JavaScript dasturini yozing.

Input:
console.log(calculateAge(new Date(1982, 11, 4)));
Output:
32
Input:
console.log(calculateAge(new Date(1962, 1, 1)));
Output: 
53 */
  function yoshniHisobla(birthDate) {
    let currentDate = new Date();
    let yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();
  
    if (
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() &&
        currentDate.getDate() < birthDate.getDate())
    ) {
      yearsDiff--;
    }
  
    return yearsDiff;
  }
  
  console.log(yoshniHisobla(new Date(1962, 1, 1))); // 61
  