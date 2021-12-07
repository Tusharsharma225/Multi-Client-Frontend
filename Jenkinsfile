node{
stage('Checkout SCM'){
git branch: 'master', url: 'https://github.com/Tusharsharma225/Multi-Client-Frontend.git'
}

stage('Install node modules'){
bat "npm install"
}


stage('Build'){
bat "npm run build"
}

stage('Deploy'){
    bat "npm run ng -- build --prod"
 }
}
