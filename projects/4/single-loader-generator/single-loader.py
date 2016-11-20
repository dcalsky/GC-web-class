from math import *

r = 40
num = 8
color = '#0cf'
circle = [-3, 0, -3] + [-10 for x in range(num - 3)]
vec = [(sin(2 * pi / num * x), cos(2 * pi / num * x)) for x in range(num)]
print(vec)

for i in range(num):
	print( '%.1f%% {' % (100 / num * i))
	print('box-shadow:')
	for j in range(num):
		x, y = map(lambda v: r * v, vec[j])
		print("%.2fpx %.2fpx %.2fpx %.2fpx %s%s" % (x, y, 0, circle[j], color, ',' if j < num - 1 else ';'))
	print('}')
	circle = circle[-1:] + circle[:-1]

