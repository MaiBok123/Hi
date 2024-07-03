var unlockedWeeks = [];

function toggleContent(id, week) {
    if (!unlockedWeeks.includes(week)) {
        alert('คุณยังไม่สามารถเปิดดูเนื้อหาของสัปดาห์นี้ได้');
        return;
    }
    
    var content = document.getElementById(id);
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

unlockWeek(1);
unlockWeek(2);
unlockWeek(3);
lockWeek(4);

function unlockWeek(week) {
    if (!unlockedWeeks.includes(week)) {
        unlockedWeeks.push(week);     
    }
}

function lockWeek(week) {
    var index = unlockedWeeks.indexOf(week);
    if (index !== -1) {
        unlockedWeeks.splice(index, 1);
    }
}
