//MYCBL JOB CLASS=A,                                          
//             MSGCLASS=X,                                    
//             MSGLEVEL=(1,1)                                 
//*                                                           
//*                                                           
//COB EXEC PGM=IKFCBL00,                                      
//         PARM='LOAD,SIZE=2024K,BUF=1024K'                   
//SYSPRINT DD SYSOUT=*                                        
//SYSPUNCH DD DUMMY                                           
//SYSIN    DD DSNAME=HERC01.MYCBL4,DISP=OLD                   
//SYSLIB DD DSNAME=SYS1.COBLIB,DISP=SHR                       
//SYSUT1 DD UNIT=SYSDA,SPACE=(460,(700,100))                  
//SYSUT2 DD UNIT=SYSDA,SPACE=(460,(700,100))                  
//SYSUT3 DD UNIT=SYSDA,SPACE=(460,(700,100))                  
//SYSUT4 DD UNIT=SYSDA,SPACE=(460,(700,100))                  
//SYSLIN DD DSNAME=&LOADSET,DISP=(MOD,PASS),                  
//             UNIT=SYSDA,SPACE=(80,(500,100))                
//GO EXEC PGM=LOADER,PARM='MAP,LET',COND=(5,LT,COB)           
//SYSLIN DD DSNAME=*.COB.SYSLIN,DISP=(OLD,DELETE)             
//SYSLOUT DD SYSOUT=*                                         
//SYSLIB DD DSNAME=SYS1.COBLIB,DISP=SHR                       
//SYSOUT   DD SYSOUT=*,DCB=(RECFM=FBA,LRECL=161,BLKSIZE=16100)