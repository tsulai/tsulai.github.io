package miu.edu.lab.aspect;

import miu.edu.lab.domain.Exception;
import miu.edu.lab.domain.Logger;
import miu.edu.lab.service.ExceptionService;
import miu.edu.lab.service.LoggerService;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.hibernate.mapping.Join;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Aspect
@Component
public class LoggerAspect {

    @Autowired
    LoggerService loggerService;

    @Autowired
    ExceptionService exceptionService;

    /**
     * Note: There is an error if I try log all execution in project.
     * Servlet.service() for servlet [dispatcherServlet] in context with path [] threw exception [Handler dispatch failed; nested exception is java.lang.StackOverflowError] with root cause java.lang.StackOverflowError: null
     * Seem the error related to framework level
     * Due to limited capability and time on spring framework
     * I have only logged all execution inside controller folder for this lab
     *
     */

    //@Pointcut("within(miu.edu.lab..*)")
    //@Pointcut("execution(* miu.edu.lab.*.*(..))")
    @Pointcut("execution(public * miu.edu.lab.controller.*.*(..))")
    public void logAllOperations(){//make sure this map to advice

    }

    @After("logAllOperations()")
    public void saveAllExecutedOperations(JoinPoint joinPoint){
        Logger newLogger = new Logger();
        newLogger.setDate(LocalDateTime.now());
        newLogger.setPrinciple("static-user-principle");
        newLogger.setOperation(joinPoint.getSignature().getName());
        loggerService.save(newLogger);
        System.out.println("=============================================");
        System.out.println("**** Logged Executed Operation: " + joinPoint.getSignature().getName());
        System.out.println("=============================================");
    }

    @AfterThrowing(value = "within(miu.edu.lab..*)",throwing = "ex")
    public void saveAllExceptions(JoinPoint joinPoint, java.lang.Exception ex){
        miu.edu.lab.domain.Exception newEx = new Exception();
        newEx.setDate(LocalDateTime.now());
        newEx.setOperation(joinPoint.getSignature().getName());
        newEx.setPrinciple("static-user-principle");
        newEx.setExceptionType(ex.getMessage());
        exceptionService.save(newEx);
        //Note: added fake error in PostUserController getPostUsers
        //try getPostUsers to see exception logged to db
        System.out.println("=============================================");
        System.out.println("**** Logged Thrown Exception from method : " + joinPoint.getSignature().getName());
        System.out.println("=============================================");
    }

    @Pointcut("@annotation(miu.edu.lab.aspect.annotation.ExecutionTime)")
    public void ExecutionTimeAnnotation(){

    }

    @Around("ExecutionTimeAnnotation()")
    public Object calExecutionTime(ProceedingJoinPoint point) throws Throwable {

        long startTime = System.currentTimeMillis();
        Object object = point.proceed();
        long endtime = System.currentTimeMillis();
        //log.info("Class Name: "+ point.getSignature().getDeclaringTypeName() +". Method Name: "+ point.getSignature().getName() + ". Time taken for Execution is : " + (endtime-startTime) +"ms");
        System.out.println("=============================================");
        System.out.println("**** Class Name: "+ point.getSignature().getDeclaringTypeName() +"\n **** Method Name: "+ point.getSignature().getName() + "\n **** Time taken for Execution is : " + (endtime-startTime) +"ms");
        System.out.println("=============================================");
        return object;
    }

}
