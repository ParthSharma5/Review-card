
    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')

    console.log('hi')
    const btn = document.querySelectorAll('.btn')
    let index = 0
    const customers = []

    function Customer(img,name,text) {
        this.img = img
        this.name = name
        this.text = text
    }
    function createCustomer(img,name,text) {
        let Img = `./img/${img}.jpg`
        let customer = new Customer(Img,name,text)
        customers.push(customer)
    }
    createCustomer(0,'Pranay Reddy' , 'I moved to Canada last year to attend a Master in Education MEd - Higher Education) program in Higher Education at the University of Torontos  Ontario Institute for Studies in Education  or simply OISE  OISE is ranked the top School of Education in Canada and fourth in the world It offers Master and PhD Courses in higher education social justice  teaching and learning')


    createCustomer(1,'Parth Sharma','Parth sharma is currently doing btech from Galgotias university gautam buddh nagar from greater noida and wants to became a full stack developer Luctus suspendisse vivamus, leo orci pede ipsum, et morbi nulla bibendum justo, commodo rutrum nulla porttitor. Nonummy massa, hic eleifend in in ligula, quam in fusce. Elit nulla volutpat sed rutrum, sit leo molestie turpis. Sapien massa varius in, amet ut velit convallis pede sed eget, est arcu scelerisque nullam, laoreet pellentesque lectus tempor luctus ut neque ')
    createCustomer(2,'Harshit Maurya','Harshit Maurya  is currently doing btech from galgotias university gautam budh nagar fron greater  and wants to becone a Software  D evceloper Sed nunc ut vitae arcu, commodo ipsum. Wisi consectetuer tincidunt ac lectus semper nec, ut nostra luctus, id suspendisse et nulla mollis phasellus eu. Facilisi quidem dolor, arcu nec est libero adipiscing ut ultrices, at rutrum vestibulum habitasse scelerisque tempus sit, ut imperdiet a lacus habitant ultrices, nisl dolor nunc. Dictum cras donec non mattis, et mattis integer nibh vivamus reiciendis hac. Litora pede pede libero phasellus, el.  ')


const nextBtn = document.querySelector('.nextBtn');

nextBtn.addEventListener('click', function() {
    index++
    console.log('hi')
    if (index === customers.length){
        index = 0
    }
 
    customerImage.src = customers[index].img;
    customerName.textContent = customers[index].name;
    customerText.textContent = customers[index].text;
});

const prevBtn = document.querySelector('.prevBtn');

prevBtn.addEventListener('click', function() {
    if (index === 0){
        index = customers.length
    }
    index--
    customerImage.src = customers[index].img;
    customerName.textContent = customers[index].name;
    customerText.textContent = customers[index].text
});