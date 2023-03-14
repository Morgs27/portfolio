
export default function addObservers(){
    
    // Create Observer to add `show` class to visible elements
    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add('show')

                let delay = 0;
                let duration = 0;

                entry.target.classList.forEach(name => {

                    if (name.indexOf('delay') > -1){
                        delay = parseInt(name.split("-")[1]) * 100
                    }

                    if (name.indexOf('duration') > -1){
                        delay = parseInt(name.split("-")[1]) * 100
                    }
                })

                setTimeout(() => {
                    entry.target.classList.forEach(name => {

                        if (name.indexOf('suppressed') > -1){
                            entry.target.classList.remove(name);
                            entry.target.classList.add(name.split('-suppressed')[0])
                        }

                    })
                }, delay + duration);

            } 
        })
    })
    
    // Adds observer to all elements with class 'observe'
    document.querySelectorAll(".observe").forEach(
        (elm) => {

            // Supress any hover animations untill after load animation is complete
            elm.classList.forEach(name => {

                if (name.indexOf('hover') > -1){
                    elm.classList.remove(name);
                    elm.classList.add(name + '-suppressed')
                }
            })

            observer.observe(elm)
        }
    )

}
