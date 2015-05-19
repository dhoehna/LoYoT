import web
import pyodbc

urls = (
	'/', 'Index',
)

app = web.application(urls, globals())

render = web.template.render('templates/')

class Model(object):
	def GetLinks():
		return "Hello Valentin!"


class Index(object):
	def GET(self):
		return render.Index(courseTitle = "", resultsTable = [""])
		
	def POST(self):
		form = web.input()
		className = ""
		if "Algebra101" in form:
			className = "Algebra 101"
		elif "Algebra200" in form:
			className = "Algebra 200"
		elif "Algebra300" in form:
			className = "Algebra 300"
		
		return render.Index(courseTitle = className, resultsTable = [className])

		
		
if __name__ == "__main__":
	app.run()