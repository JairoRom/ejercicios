SELECT COUNT(*) AS FirstClassSurvivors
FROM tested
WHERE pclass=1
AND survived=1;