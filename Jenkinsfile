node{
stage('Checkout SCM'){
git branch: 'master', url: 'https://github.com/Tusharsharma225/Multi-Client-Frontend.git'
}

stage('Install node modules'){
bat "npm install"
}


stage('Build'){
bat "npm run-scipt build"
}

stage('Deploy'){
    bat "ng serve -o"
 }
}