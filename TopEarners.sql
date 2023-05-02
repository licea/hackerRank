select concat (max(salary * months), ' ' , count(*))
from employee
group by (salary * months)
order by (salary * months) desc
limit 1;
