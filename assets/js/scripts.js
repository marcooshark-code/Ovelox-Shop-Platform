document.addEventListener('DOMContentLoaded', function() {
    // تأكد من أن هذا الـ ID مطابق لما في ملف index.html
    const floatingBtn = document.getElementById('floating-whatsapp-btn');

    // تكرار عملية الوميض كل 30 ثانية
    const flashInterval = 30000; 

    function startFlash() {
        // إضافة كلاس CSS لتشغيل الحركة البصرية للوميض
        floatingBtn.classList.add('flash-animation'); 

        // إزالة الكلاس بعد انتهاء الوميض (3ومضات * 300ms = 900ms)
        setTimeout(() => {
            floatingBtn.classList.remove('flash-animation');
        }, 900); 
    }

    // تفعيل الوميض الأول بعد 5 ثوانٍ من تحميل الصفحة
    setTimeout(startFlash, 5000); 

    // تفعيل الوميض بشكل متكرر كل 30 ثانية
    setInterval(startFlash, flashInterval);
});
