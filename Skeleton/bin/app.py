import web
import pyodbc

urls = (
	'/', 'Index',
	'/Hello', 'HelloForm'
)

app = web.application(urls, globals())

render = web.template.render('templates/')

class Index(object):
	def GET(self):
		return render.Index()

		
		
class HelloForm(object):
	def GET(self):
		return render.Hello(reversedString = "OMG HI", resultsTable = "")
		
	def POST(self):
		form = web.input(stringToReverse = "", resultsTable = "");
		return render.Hello(reversedString = self.reverseThisString(form.stringToReverse),
		resultsTable = self.getAList())
	
	@staticmethod
	def reverseThisString(stringToReverse):
		return stringToReverse[::-1]
		
	@staticmethod
	def getAList():
		table = []
		cnxn = pyodbc.connect('DRIVER={SQL Server};SERVER=DARREN-PC\SQLEXPRESS;DATABASE=LearnOnYourOwnTime;UID=sa;PWD=-b=-b2-4ac2a')
		cursor = cnxn.cursor()
		cursor.execute("SELECT TOP 1000 [id] ,[tagName] FROM [LearnOnYourOwnTime].[dbo].[TagOne]")
		row = cursor.fetchone()
		if row:
			table.append(row[1])
		return table
		
		
if __name__ == "__main__":
	app.run()