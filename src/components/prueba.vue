<style scoped>
.home {
	width: 100%;
}

.services-summary {
	padding: 30px 0;
}

.services-title {
	font-size: 2.5rem;
	font-weight: bold;
	color: #003366;
	text-transform: uppercase;
	text-shadow: 1px 1px 3px rgba(0, 51, 102, 0.3);
	position: relative;
}

.services-title::after {
	content: "";
	display: block;
	width: 80px;
	height: 4px;
	background-color: #003366;
	margin: 8px auto 0;
	border-radius: 2px;
}

.card {
	border: 1px solid #e0e0e0;
	box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
	transition: transform 0.2s ease, box-shadow 0.2s ease;
	border-radius: 8px;
	background-color: #ffffff;
}

.card:hover {
	transform: translateY(-5px);
	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	background-color: #f9f9f9;
}

.icon-container {
	text-align: center;
	font-size: 3rem;
	color: #0056b3;
	margin-bottom: 20px;
}

.card-title {
	font-size: 1.5rem;
	font-weight: bold;
	color: #003366;
	text-align: center;
}

.card-text {
	font-size: 1rem;
	color: #666;
	margin-bottom: 15px;
}

.btn-outline-primary {
	border-color: #0056b3;
	color: #0056b3;
	transition: all 0.3s ease;
}

.btn-outline-primary:hover {
	background-color: #0056b3;
	color: #ffffff;
}
</style>
