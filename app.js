const packages = [
  { heavy: true, priority: false, fragile: false, to: 'Harrington', trackingNumber: '1324kjs' },
  { heavy: false, priority: true, fragile: true, to: 'Mark', trackingNumber: '1325sdk' },
  { heavy: true, priority: false, fragile: true, to: 'Mick', trackingNumber: 'jffd147' },
  { heavy: false, priority: false, fragile: false, to: 'Jake', trackingNumber: 'acdc145' },
  { heavy: true, priority: true, fragile: true, to: 'Brittany', },
  { heavy: false, priority: true, fragile: false, to: 'Jonesy', trackingNumber: '8081baz' },
  { heavy: true, priority: false, fragile: true, to: 'Justin', trackingNumber: 'suz2367' }
]


function drawAll() {
  let template = ''
  for (let i = 0; i < packages.length; i++) {
    const package = packages[i];
    template += `<li>${package.to}</li>`
  }

  document.getElementById('packages').innerHTML = template
  document.getElementById('packages2').innerHTML = ''
}



function filterHeavy() {
  let heavyPackages = packages.filter(package => package.heavy)
  let template = ''
  for (let i = 0; i < heavyPackages.length; i++) {
    const package = heavyPackages[i];
    template += `<li>${package.to}: ${package.heavy}</li>`
  }
  document.getElementById('packages').innerHTML = template
  filterNotHeavy()
}

function filterNotHeavy() {
  let notHeavyPackages = packages.filter(package => !package.heavy)
  let template = ''
  for (let i = 0; i < notHeavyPackages.length; i++) {
    const package = notHeavyPackages[i];
    template += `<li>${package.to}: ${package.heavy}</li>`
  }
  document.getElementById('packages2').innerHTML = template
}


function filterPriority() {
  let priorityPackages = packages.filter(package => package.priority)
  let template = ''
  for (let i = 0; i < priorityPackages.length; i++) {
    const package = priorityPackages[i];
    template += `<li>${package.to}: ${package.priority}</li>`
  }
  document.getElementById('packages').innerHTML = template
  filterNonPriority()
}

function filterNonPriority() {
  let nonPriorityPackages = packages.filter(package => !package.priority)
  let template = ''
  for (let i = 0; i < nonPriorityPackages.length; i++) {
    const package = nonPriorityPackages[i];
    template += `<li>${package.to}: ${package.priority}</li>`
  }
  document.getElementById('packages2').innerHTML = template
}


function filterFragile() {
  let fragilePackages = packages.filter(package => package.fragile)
  let template = ''
  for (let i = 0; i < fragilePackages.length; i++) {
    const package = fragilePackages[i];
    template += `<li>${package.to}: ${package.fragile}</li>`
  }
  document.getElementById('packages').innerHTML = template
  filterNonFragile()
}

function filterNonFragile() {
  let nonFragilePackages = packages.filter(package => !package.fragile)
  let template = ''
  for (let i = 0; i < nonFragilePackages.length; i++) {
    const package = nonFragilePackages[i];
    template += `<li>${package.to}: ${package.fragile}</li>`
  }
  document.getElementById('packages2').innerHTML = template
}


function filterTo() {
  let toPackages = packages.filter(package => package.to)
  let template = ''
  for (let i = 0; i < toPackages.length; i++) {
    const package = toPackages[i];
    template += `<li>${package.to}: ${package.to}</li>`
  }
  document.getElementById('packages').innerHTML = template
  filterNotTo()
}

function filterNotTo() {
  let toPackages = packages.filter(package => !package.to)
  let template = ''
  for (let i = 0; i < toPackages.length; i++) {
    const package = toPackages[i];
    template += `<li>${package.to}: ${package.to}</li>`
  }
  document.getElementById('packages2').innerHTML = template
}


function filterTrackingNumber() {
  let trackingnumberPackages = packages.filter(package => package.trackingNumber)
  let template = ''
  for (let i = 0; i < trackingnumberPackages.length; i++) {
    const package = trackingnumberPackages[i];
    template += `<li>${package.to}: ${package.trackingNumber}</li>`
  }
  document.getElementById('packages').innerHTML = template
  filterNonTrackingNumber()
}

function filterNonTrackingNumber() {
  let trackingnumberPackages = packages.filter(package => !package.trackingNumber)
  let template = ''
  for (let i = 0; i < trackingnumberPackages.length; i++) {
    const package = trackingnumberPackages[i];
    template += `<li>${package.to}: ${package.trackingNumber}</li>`
  }
  document.getElementById('packages2').innerHTML = template
}

drawAll()