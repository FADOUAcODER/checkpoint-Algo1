VAR
countchar,countv,countw: INTEGER:=0;
str : STRING ;
i : INTEGER :=0;


BEGIN

 REPEAT
        Read(str);
    UNTIL (str[length(str)]:=".")
    
    DO
    countchar:= i;  
    i++;  
   WHILE (str[i]=".") ;



FOR i FROM 1 TO length.str STEP i++  DO
    countchar:= length.str
    if(str[i]=" ") THEN
    countw := countw + 1 ;
    END if ;
    
    if (str[i]="a" or str[i]="e" or str[i]="i" or str[i]="o" or str[i]="u" or str[i]="y" or
     str[i]="A" or str[i]="E" or str[i]="I" or str[i]="O" or str[i]="U" or str[i]="Y") THEN
            countv:= countv + 1;
        END_IF

END_FOR
countw:= countw+1;
  Write(countchar);
    Write(countw);
    Write(countv);

END