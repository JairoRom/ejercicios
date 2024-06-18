SELECT AVG(age) AS AvAge
FROM tested
WHERE sex = 'male'
AND survived = 0
AND age IS NOT NULL;