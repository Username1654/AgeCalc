
function calculateAge(){
    const birthDateInput = document.getElementById("birthdate").value
    const result = document.getElementById('result')
    const birthDate = new Date(birthDateInput +'T00:00:00')
    console.log(birthDate)
    const today = new Date()
    console.log(today)

    let age = today.getFullYear() - birthDate.getFullYear()
    let month = today.getMonth() - birthDate.getMonth()
    console.log(month, age)

    if(month <0 || (month ===0 && today.getDate() < birthDate.getDate())){
        age--
    }
    let months = month
    if(months < 0){
        months +=12
    }
    //calc days 
    let days = today.getDate() - birthDate.getDate()
    console.log(days)
    console.log(days)
    
    if(days <0){
        const lastMonth = new Date(today.getFullYear(),birthDate.getMonth()-1, birthDate.getDate())

        
        let d = today - lastMonth
        console.log(d)
        days = Math.floor((today - lastMonth) / (1000*60*60*24))
        console.log(days)
    }

    const forDate = birthDate.toLocaleDateString('en-US',{
        weekday:'long',
        year:'numeric',
        month:'long',
        day:'numeric'
    })

    result.innerHTML = `
    <p>Your Birthdate: <strong>${forDate}</strong><br></p>
    <p>Your Age is: </p>
    <p><strong>${age} years, ${months} Months, and ${days} days</strong></p> `
}
