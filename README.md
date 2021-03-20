# Instalaciones
npm i typeorm-aurora-data-api-driver
                      
## Invocar local
sls invoke local -f funcion   
                            
## Configuraciones
sls config credentials --provider aws --key "" --secret "" --profile deploy-aws    
El profile se crea localmente
                                   
## Deploy
sls deploy --stage dev --verbose
                    
## En package.json
npm run invoke    
npm run deploy

